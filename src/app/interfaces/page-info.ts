import { Category } from './category';

export interface PageInfo {
  info: string[];
  description: string[];
  emoji: string;
  image: string;
  categories: Category[];
}
