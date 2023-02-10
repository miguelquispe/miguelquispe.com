import path from 'path';
import { sync } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { Post, PostMeta } from '@components/Post';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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

export async function getFiles(type: string): Promise<string[]> {
  return fs.readdirSync(path.join(root, 'content', type));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = fs.readdirSync(POSTS_PATH);

  const allPosts: PostMeta[] = [];

  files.forEach((file) => {
    const mdxSource = fs.readFileSync(path.join(POSTS_PATH, file), 'utf-8');
    const { content, data: frontmatter } = matter(mdxSource);

    if (frontmatter.draft !== true) {
      allPosts.push({
        ...frontmatter,
        slug: file.replace(/\.(mdx|md)/, ''),
        publishedAt: (frontmatter.publishedAt ?? new Date()).toString(),
        readingTime: readingTime(content).minutes,
      });
    }
  });

  return allPosts.sort((a, b) => dateSortDesc(a.publishedAt, b.publishedAt));
}

export async function getPostFromSlug(slug: string): Promise<Post> {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { content, data } = matter(fileContent);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ],
      format: 'mdx',
    },
  });

  return {
    content: mdxSource,
    meta: {
      slug,
      publishedAt: (data.publishedAt ?? new Date()).toString(),
      readingTime: readingTime(content).minutes,
      ...data,
    },
    draft: data.draft ?? false,
  };
}

export function dateSortDesc(a: string, b: string): number {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
