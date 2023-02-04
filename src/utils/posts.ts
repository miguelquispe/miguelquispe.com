import path from 'path';
import { sync } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { Post } from '@components/Post';

const root = process.cwd();

const POSTS_PATH = path.join(root, 'content', 'posts').replace(/\\/g, '//');

export function getSlugs(): string[] {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split('.');

    return slug;
  });
}

export function getAllPosts(): Post[] {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .filter((post) => post.draft !== true)
    .sort((a, b) => dateSortDesc(a.meta.publishedAt, b.meta.publishedAt));

  return posts;
}

export function getPostFromSlug(slug: string): Post {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      description: data.description ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      publishedAt: (data.publishedAt ?? new Date()).toString(),
      readingTime: readingTime(content).minutes,
      type: data.type ?? null,
      image: data.image ?? null,
    },
    draft: data.draft ?? false,
  };
}

export function dateSortDesc(a: string, b: string): number {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
