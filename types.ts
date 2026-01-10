
export type NodeType = 'character' | 'event' | 'group';

export interface GraphNode {
  id: string;
  label: string;
  type: NodeType;
  group?: string;
  description?: string;
  chapter?: number | number[];
  status?: 'active' | 'missing' | 'dead' | 'escaped';
  statusChangeChapter?: number; // Глава, в которой персонаж меняет статус (умирает, пропадает, сбегает)
  details?: string;
}

export interface GraphLink {
  source: string;
  target: string;
  label: string;
  description?: string;
}

export interface BookData {
  nodes: GraphNode[];
  links: GraphLink[];
}
