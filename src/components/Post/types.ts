
export interface Post {
  content: string,
  meta: PostMeta
}

export interface PostMeta {
  excerpt?: string;
  slug: string;
  title: string;
  tags?: string[];
  publishedAt: string;
  readingTime: number
}
