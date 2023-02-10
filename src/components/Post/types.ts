import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Post {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
  draft: boolean;
}

export interface PostMeta {
  description?: string;
  slug?: string;
  title?: string;
  tags?: string[];
  type?: string;
  publishedAt: string;
  readingTime: number;
  image?: string;
}
