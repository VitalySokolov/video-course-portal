import { AuthorItem } from './author-item.model';

export interface CourseItem {
  id: number;
  name: string;
  description: string;
  date: string;
  length: number;
  authors: AuthorItem[];
  isTopRated: boolean;
}
