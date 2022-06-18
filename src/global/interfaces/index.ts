import { Post } from '../../patterns/PostCard'

export interface PageWithPostProps {
  posts: Post[];
  next_page: string | null;
  total_pages: number;
}