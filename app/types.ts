export interface Item {
  id: number;
  time: number;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  deleted?: boolean;
  by?: string;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number[];
}

export interface Story extends Item {
  type: 'story';
  by: string;
  text: string;
  dead: boolean;
  title: string;
  score: number;
}

export interface Comment extends Item {
  type: 'comment';
  parent: number;
  text: string;
  by: string;
}

export interface Poll extends Item {
  type: 'poll';
  kids: number[];
  parts: number[];
  title: string;
  by: string;
}

export interface Job extends Item {
  type: 'job';
  text: string;
  by: string;
}

export interface PollOption extends Item {
  type: 'pollopt';
  poll: number;
  text: string;
  by: string;
}

export interface User {
  id: string;
  about: string;
  created: number;
  delay: number;
  karma: number;
  submitted: number[];
}

export interface FullItem {
  item: Item;
  descendants: FullItem[];
}

export interface AdjacentComments {
  prev: number | null;
  next: number | null;
}
