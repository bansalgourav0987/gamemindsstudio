export interface Game {
  title: string;
  image: string;
  description: string;
  category: string;
  rating: number;
  players: string;
}

export interface GameFilterOptions {
  search: string;
  category: string;
  sortBy: 'rating' | 'players' | 'name';
}