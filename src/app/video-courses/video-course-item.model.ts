import { AuthorItem } from './author-item.model';

export interface VideoCourseItem {
  id: number;
  title: string;
  description: string;
  date: Date;
  duration: number;
  authors: AuthorItem[];
  isTopRated: boolean;
}
