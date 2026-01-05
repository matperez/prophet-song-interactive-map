
import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { BookData, GraphNode, GraphLink } from '../types';

interface GraphViewProps {
  data: BookData;
  onNodeClick: (id: string) => void;
  selectedNodeId: string | null;
}

const GraphView: React.FC<GraphViewProps> = ({ data, onNodeClick, selectedNodeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  // Identify connected event IDs for highlighting when a character is selected
  const connectedEventIds = useMemo(() => {
    if (!selectedNodeId) return new Set<string>();
    const selectedNode = data.nodes.find(n => n.id === selectedNodeId);
    // Only perform this specific highlight logic if the selected node is a character
    if (!selectedNode || selectedNode.type !== 'character') return new Set<string>();

    const eventIds = new Set<string>();
    data.links.forEach(link => {
      const s = typeof link.source === 'string' ? link.source : (link.source as any).id;
      const t = typeof link.target === 'string' ? link.target : (link.target as any).id;

      if (s === selectedNodeId) {
        const targetNode = data.nodes.find(n => n.id === t);
        if (targetNode?.type === 'event') eventIds.add(t);
      } else if (t === selectedNodeId) {
        const sourceNode = data.nodes.find(n => n.id === s);
        if (sourceNode?.type === 'event') eventIds.add(s);
      }
    });
    return eventIds;
  }, [selectedNodeId, data.nodes, data.links]);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Define glow filter
    const defs = svg.append('defs');
    const filter = defs.append('filter')
      .attr('id', 'neon-glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    filter.append('feGaussianBlur')
      .attr('stdDeviation', '3')
      .attr('result', 'coloredBlur');
    
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    const g = svg.append('g');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Forces
    const simulation = d3.forceSimulation<GraphNode, any>(data.nodes as any)
      .force('link', d3.forceLink<GraphNode, any>(data.links as any).id(d => d.id).distance(160))
      .force('charge', d3.forceManyBody().strength(-500))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(80));

    // Links
    const link = g.append('g')
      .selectAll('line')
      .data(data.links)
      .enter().append('line')
      .attr('stroke', (d: any) => {
        const s = typeof d.source === 'string' ? d.source : d.source.id;
        const t = typeof d.target === 'string' ? d.target : d.target.id;
        return (s === selectedNodeId || t === selectedNodeId) ? '#f59e0b' : '#334155';
      })
      .attr('stroke-width', (d: any) => {
        const s = typeof d.source === 'string' ? d.source : d.source.id;
        const t = typeof d.target === 'string' ? d.target : d.target.id;
        return (s === selectedNodeId || t === selectedNodeId) ? 3 : 1.5;
      })
      .attr('stroke-opacity', (d: any) => {
        const s = typeof d.source === 'string' ? d.source : d.source.id;
        const t = typeof d.target === 'string' ? d.target : d.target.id;
        if (!selectedNodeId) return 0.6;
        return (s === selectedNodeId || t === selectedNodeId) ? 1 : 0.15;
      });

    // Node groups
    const node = g.append('g')
      .selectAll('g')
      .data(data.nodes)
      .enter().append('g')
      .attr('cursor', 'pointer')
      .on('click', (event, d) => onNodeClick(d.id))
      .on('mouseenter', function(event, d: any) {
        const isSelected = d.id === selectedNodeId;
        const isConnected = connectedEventIds.has(d.id);
        const baseR = isSelected ? (d.type === 'event' ? 32 : 26) : 
                      (isConnected ? 30 : (d.type === 'event' ? 24 : 18));
        
        d3.select(this).select('circle')
          .transition('hover')
          .duration(250)
          .attr('r', baseR * 1.2)
          .style('filter', 'url(#neon-glow)');
          
        d3.select(this).select('text')
          .transition('hover')
          .duration(250)
          .attr('font-size', (isSelected || isConnected) ? '18px' : '14px')
          .attr('dy', baseR * 1.2 + 15);
      })
      .on('mouseleave', function(event, d: any) {
        const isSelected = d.id === selectedNodeId;
        const isConnected = connectedEventIds.has(d.id);
        const baseR = isSelected ? (d.type === 'event' ? 32 : 26) : 
                      (isConnected ? 30 : (d.type === 'event' ? 24 : 18));

        d3.select(this).select('circle')
          .transition('hover')
          .duration(250)
          .attr('r', baseR)
          .style('filter', isConnected || isSelected ? 'url(#neon-glow)' : null);

        d3.select(this).select('text')
          .transition('hover')
          .duration(250)
          .attr('font-size', (isSelected || isConnected) ? '15px' : '11px')
          .attr('dy', baseR + 15);
      })
      .call(d3.drag<SVGGElement, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any
      );

    // Node circles
    node.append('circle')
      .attr('r', d => {
        if (d.id === selectedNodeId) return d.type === 'event' ? 32 : 26;
        if (connectedEventIds.has(d.id)) return 30;
        return d.type === 'event' ? 24 : 18;
      })
      .attr('fill', d => {
        if (d.id === selectedNodeId) return '#ef4444'; 
        if (connectedEventIds.has(d.id)) return '#fbbf24'; // Distinct Highlighted Amber
        
        switch (d.group) {
          case 'family': return '#dc2626'; 
          case 'authority': return '#64748b';
          case 'friend': return '#10b981';
          case 'support': return '#3b82f6';
          default: return '#92400e'; // Default Event color (deeper)
        }
      })
      .attr('opacity', d => {
        if (!selectedNodeId) return 1;
        if (d.id === selectedNodeId || connectedEventIds.has(d.id)) return 1;
        return 0.3; 
      })
      .attr('stroke', d => {
        if (d.id === selectedNodeId) return '#ffffff';
        if (connectedEventIds.has(d.id)) return '#ffffff';
        return '#1e293b';
      })
      .attr('stroke-width', d => (d.id === selectedNodeId || connectedEventIds.has(d.id)) ? 3 : 1.5)
      .style('filter', d => (d.id === selectedNodeId || connectedEventIds.has(d.id)) ? 'url(#neon-glow)' : null);

    // Node labels
    node.append('text')
      .attr('dy', (d) => {
        const r = (d.id === selectedNodeId) ? (d.type === 'event' ? 32 : 26) : 
                  (connectedEventIds.has(d.id) ? 30 : (d.type === 'event' ? 24 : 18));
        return r + 15;
      })
      .attr('text-anchor', 'middle')
      .attr('fill', d => (d.id === selectedNodeId || connectedEventIds.has(d.id)) ? '#ffffff' : '#94a3b8')
      .attr('font-size', d => (d.id === selectedNodeId || connectedEventIds.has(d.id)) ? '15px' : '11px')
      .attr('font-weight', d => (d.id === selectedNodeId || connectedEventIds.has(d.id)) ? '800' : '400')
      .style('text-shadow', d => (d.id === selectedNodeId || connectedEventIds.has(d.id)) ? '0 0 8px #000, 2px 2px 2px #000' : '1px 1px 1px #000')
      .style('pointer-events', 'none')
      .text(d => d.label);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', d => `translate(${(d as any).x},${(d as any).y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

  }, [data, onNodeClick, selectedNodeId, connectedEventIds]);

  return (
    <svg 
      ref={svgRef} 
      className="w-full h-full"
      style={{ touchAction: 'none' }}
    />
  );
};

export default GraphView;
