export interface Post {
  content: string;
  meta: PostMeta;
  draft: boolean;
}

export interface PostMeta {
  description?: string;
  slug: string;
  title: string;
  tags?: string[];
  type?: string;
  publishedAt: string;
  readingTime: number;
  image?: string;
}
