
import React, { useMemo } from 'react';
import { GraphNode, GraphLink } from '../types';

interface SidebarProps {
  selectedNode: GraphNode | null;
  allNodes: GraphNode[];
  allLinks: GraphLink[];
  selectedChapter: number | null;
  onClose: () => void;
  onNodeSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedNode, allNodes, allLinks, selectedChapter, onClose, onNodeSelect }) => {
  if (!selectedNode) return null;

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'dead': return 'text-red-600 bg-red-100/10 border-red-500/20';
      case 'dead_before': return 'text-red-500 bg-red-100/10 border-red-500/20';
      case 'missing': return 'text-slate-400 bg-slate-100/10 border-slate-500/20';
      case 'escaped': return 'text-emerald-500 bg-emerald-100/10 border-emerald-500/20';
      case 'active': return 'text-blue-500 bg-blue-100/10 border-blue-500/20';
      case 'not_appeared': return 'text-slate-500 bg-slate-100/5 border-slate-600/20';
      default: return 'text-amber-500 bg-amber-100/10 border-amber-500/20';
    }
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case 'dead': return 'Погиб(ла)';
      case 'dead_before': return 'Мертв(а)';
      case 'missing': return 'Пропал(а) без вести';
      case 'escaped': return 'Бежал(а) из страны';
      case 'active': return 'Активен(на)';
      case 'not_appeared': return 'Еще не упоминался';
      default: return 'Статус неизвестен';
    }
  };

  // Функция для определения статуса персонажа в зависимости от выбранной главы
  const getCharacterStatusForChapter = (node: GraphNode, chapter: number | null): string | undefined => {
    if (node.type !== 'character') return node.status;
    
    // Проверяем, был ли персонаж упомянут как уже мертвый (умер до начала событий)
    const isDeadBeforeEvents = node.status === 'dead' && node.statusChangeChapter === 0;
    
    // Если персонаж упомянут как уже мертвый, всегда показываем "Мертв"
    if (isDeadBeforeEvents) {
      return 'dead_before';
    }
    
    // Если выбраны все главы, показываем финальный статус
    if (chapter === null) {
      return node.status;
    }

    // Определяем первую главу, где появляется персонаж
    const firstChapter = Array.isArray(node.chapter) 
      ? (node.chapter.length > 0 ? Math.min(...node.chapter) : Infinity)
      : (node.chapter || Infinity);

    // Если персонаж еще не упоминался в выбранной главе
    if (firstChapter > chapter) {
      return 'not_appeared';
    }

    // Если у персонажа нет финального статуса или он 'active', показываем 'active'
    if (!node.status || node.status === 'active') {
      return 'active';
    }

    // Если есть информация о том, в какой главе меняется статус
    if (node.statusChangeChapter !== undefined) {
      // Если статус уже изменился к этой главе
      if (node.statusChangeChapter <= chapter) {
        return node.status;
      }
      // Если статус еще не изменился
      return 'active';
    }

    // Если нет информации о главе изменения статуса, используем эвристику:
    // Если последняя глава персонажа <= выбранной главы, показываем финальный статус
    const lastChapter = Array.isArray(node.chapter)
      ? Math.max(...node.chapter)
      : (node.chapter || 0);

    if (lastChapter <= chapter) {
      return node.status;
    }

    // Иначе персонаж еще активен
    return 'active';
  };

  const currentStatus = getCharacterStatusForChapter(selectedNode, selectedChapter);

  // Find all connections and their metadata
  const connections = useMemo(() => {
    return allLinks
      .filter(link => {
        const sourceId = typeof link.source === 'string' ? link.source : (link.source as any).id;
        const targetId = typeof link.target === 'string' ? link.target : (link.target as any).id;
        return sourceId === selectedNode.id || targetId === selectedNode.id;
      })
      .map(link => {
        const sourceId = typeof link.source === 'string' ? link.source : (link.source as any).id;
        const targetId = typeof link.target === 'string' ? link.target : (link.target as any).id;
        const otherNodeId = sourceId === selectedNode.id ? targetId : sourceId;
        const otherNode = allNodes.find(n => n.id === otherNodeId);
        return {
          node: otherNode,
          label: link.label,
          description: link.description
        };
      })
      .filter(conn => !!conn.node);
  }, [selectedNode, allNodes, allLinks]);

  return (
    <aside className="w-96 bg-slate-900 border-r border-slate-700 flex flex-col h-full shadow-2xl z-20 transition-transform duration-300 transform translate-x-0">
      <div className="p-6 border-b border-slate-700 flex justify-between items-start bg-slate-900/50">
        <div className="flex-1">
          <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block ${selectedNode.type === 'event' ? 'text-amber-500' : 'text-slate-500'}`}>
            {selectedNode.type === 'character' ? 'Персонаж' : 'Ключевое событие'}
          </span>
          <h2 className="text-2xl font-bold text-slate-100 leading-tight">
            {selectedNode.label}
          </h2>
        </div>
        <button 
          onClick={onClose}
          className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg ml-2"
          aria-label="Закрыть"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-slate-700">
        {/* Status Section for Characters */}
        {selectedNode.type === 'character' && currentStatus && (
          <section>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">
              {selectedChapter === null ? 'Текущий статус' : `Статус в главе ${selectedChapter}`}
            </span>
            <div className={`px-3 py-2 rounded-lg border text-sm font-medium inline-block ${getStatusColor(currentStatus)}`}>
              {getStatusLabel(currentStatus)}
            </div>
          </section>
        )}

        {/* Chapter Section for Events or related chars */}
        {selectedNode.chapter && (
          <section>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Глава в книге</span>
            <div className="text-amber-200 bg-amber-900/30 px-3 py-1.5 rounded-lg text-sm border border-amber-700/50 inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Глава {Array.isArray(selectedNode.chapter) ? selectedNode.chapter.join(', ') : selectedNode.chapter}
            </div>
          </section>
        )}

        {/* Brief Description */}
        <section>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Описание</span>
          <p className="text-slate-200 text-sm leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
            {selectedNode.description || 'Нет доступного описания.'}
          </p>
        </section>

        {/* Plot Details */}
        {selectedNode.details && (
          <section>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block italic">Контекст</span>
            <p className="text-slate-400 text-sm italic leading-relaxed pl-4 border-l-2 border-slate-700">
              {selectedNode.details}
            </p>
          </section>
        )}

        {/* Connections with Metadata */}
        {connections.length > 0 && (
          <section>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 block">Связи и отношения</span>
            <div className="space-y-4">
              {connections.map((conn, idx) => (
                <div 
                  key={idx} 
                  className="group bg-slate-800/20 hover:bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 transition-all cursor-pointer"
                  onClick={() => onNodeSelect(conn.node!.id)}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-100 group-hover:text-red-400 transition-colors">
                      {conn.node!.label}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-tight">
                      {conn.label}
                    </span>
                  </div>
                  {conn.description && (
                    <p className="text-[11px] text-slate-400 leading-tight mt-1 line-clamp-2">
                      {conn.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="p-4 bg-slate-950/50 border-t border-slate-800">
        <p className="text-[9px] text-slate-600 uppercase tracking-[0.3em] text-center">
          Prophet Song Knowledge Graph
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
