
import React, { useState, useMemo } from 'react';
import GraphView from './components/GraphView';
import Sidebar from './components/Sidebar';
import { PROPHET_SONG_DATA } from './data';
import { GraphNode } from './types';

const App: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const selectedNode = useMemo(() => 
    PROPHET_SONG_DATA.nodes.find(n => n.id === selectedNodeId) || null
  , [selectedNodeId]);

  const filteredData = useMemo(() => {
    let nodes = PROPHET_SONG_DATA.nodes;
    let links = PROPHET_SONG_DATA.links;

    // 1. Chapter Filtering Logic
    if (selectedChapter !== null) {
      // Find event nodes belonging to this chapter
      const chapterEvents = PROPHET_SONG_DATA.nodes.filter(n => {
        if (n.type !== 'event' || !n.chapter) return false;
        if (Array.isArray(n.chapter)) return n.chapter.includes(selectedChapter);
        return n.chapter === selectedChapter;
      });
      const chapterEventIds = new Set(chapterEvents.map(e => e.id));

      // Find characters/groups linked to these events
      const associatedNodeIds = new Set<string>();
      chapterEvents.forEach(e => associatedNodeIds.add(e.id));

      PROPHET_SONG_DATA.links.forEach(l => {
        const s = typeof l.source === 'string' ? l.source : (l.source as any).id;
        const t = typeof l.target === 'string' ? l.target : (l.target as any).id;
        if (chapterEventIds.has(s)) associatedNodeIds.add(t);
        if (chapterEventIds.has(t)) associatedNodeIds.add(s);
      });

      // Also include characters who explicitly have this chapter in their metadata (if any)
      PROPHET_SONG_DATA.nodes.forEach(n => {
        if (n.chapter) {
          if (Array.isArray(n.chapter) ? n.chapter.includes(selectedChapter) : n.chapter === selectedChapter) {
            associatedNodeIds.add(n.id);
          }
        }
      });

      nodes = nodes.filter(n => associatedNodeIds.has(n.id));
    }

    // 2. Text Search Filtering
    if (filter) {
      const lowerFilter = filter.toLowerCase();
      nodes = nodes.filter(n => 
        n.label.toLowerCase().includes(lowerFilter) || 
        n.group?.toLowerCase().includes(lowerFilter)
      );
    }

    // 3. Reconstruct Links for visible nodes
    const nodeIds = new Set(nodes.map(n => n.id));
    links = PROPHET_SONG_DATA.links.filter(l => 
      nodeIds.has(typeof l.source === 'string' ? l.source : (l.source as any).id) &&
      nodeIds.has(typeof l.target === 'string' ? l.target : (l.target as any).id)
    );

    return { nodes, links };
  }, [filter, selectedChapter]);

  const chapters = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar for Node Details */}
      <Sidebar 
        selectedNode={selectedNode} 
        allNodes={PROPHET_SONG_DATA.nodes}
        allLinks={PROPHET_SONG_DATA.links}
        onClose={() => setSelectedNodeId(null)} 
        onNodeSelect={(id) => setSelectedNodeId(id)}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative flex flex-col">
        {/* Header Overlay */}
        <header className="absolute top-0 left-0 right-0 p-6 pointer-events-none z-10 flex justify-between items-start">
          <div className="pointer-events-auto bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl max-w-lg">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Песнь Пророка
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Интерактивная карта персонажей и событий романа Пола Линча. 
            </p>
            <div className="mt-4 flex gap-2">
              <input 
                type="text" 
                placeholder="Поиск..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>

          {/* Chapter Filter Floating Window */}
          <div className="pointer-events-auto bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 text-center">Фильтр по главам</h3>
            <div className="grid grid-cols-5 gap-2">
              <button
                onClick={() => setSelectedChapter(null)}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border ${
                  selectedChapter === null 
                  ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                Все
              </button>
              {chapters.map(ch => (
                <button
                  key={ch}
                  onClick={() => setSelectedChapter(ch)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-xs font-bold transition-all border ${
                    selectedChapter === ch 
                    ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {ch}
                </button>
              ))}
            </div>
            {selectedChapter && (
              <p className="text-[10px] text-amber-500/70 mt-2 text-center italic">
                Показаны события и герои Главы {selectedChapter}
              </p>
            )}
          </div>
        </header>

        {/* Legend */}
        <div className="absolute bottom-6 left-6 p-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-lg z-10">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Легенда</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-xs">Семья Стэков</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-400"></div>
              <span className="text-xs">Власти / ГСНБ</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-xs">События</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs">Друзья / Поддержка</span>
            </div>
          </div>
        </div>

        {/* Graph Component */}
        <div className="flex-1 w-full h-full">
          <GraphView 
            data={filteredData} 
            selectedNodeId={selectedNodeId}
            onNodeClick={(id) => setSelectedNodeId(id)}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
