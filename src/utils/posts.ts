import path from 'path';
import { sync } from 'glob';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import {
  PostCodepen,
  PostImage,
  PostLink,
  type PostMeta,
} from '@components/Post';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { compileMDX } from 'next-mdx-remote/rsc';

const root = process.cwd();

const POSTS_PATH = path.join(root, 'content', 'posts').replace(/\\/g, '//');

export function getSlugs(): string[] {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const pathContent = path.split('/');
    const fileName = pathContent[pathContent.length - 1];
    const [slug] = fileName.split('.');

    return slug;
  });
}

export async function getFiles(type: string): Promise<string[]> {
  const dirPath = path.join(root, 'content', type);
  return fs.readdirSync(dirPath).filter((file) => file.endsWith('.mdx'));
}

// Helper to get rounded reading time in minutes
function getReadingTime(text: string): number {
  return Math.ceil(readingTime(text).minutes);
}

export function getAllPosts(): PostMeta[] {
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
        readingTime: getReadingTime(content),
      });
    }
  });

  return allPosts.sort((a, b) => dateSortDesc(a.publishedAt, b.publishedAt));
}

const components = {
  PostImage,
  a: PostLink,
  PostCodepen,
};

export async function getPostFromSlug(slug: string): Promise<Record<any, any>> {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const fileContent = fs.readFileSync(postPath, 'utf-8');
  const { content: contentMatter } = matter(fileContent);

  const readingTime = getReadingTime(contentMatter);

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
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
    },
    components,
  });

  return {
    content,
    meta: {
      slug,
      publishedAt: (frontmatter.publishedAt ?? new Date()).toString(),
      readingTime,
      ...frontmatter,
    },
    draft: frontmatter.draft ?? false,
  };
}

export function dateSortDesc(a: string, b: string): number {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
