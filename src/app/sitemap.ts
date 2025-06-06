import type { MetadataRoute } from 'next';
import { getAllPosts } from 'utils/posts';

const posts = getAllPosts();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://miguelquispe.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: ['https://miguelquispe.com/images/cover-share-page.png'],
    },
    {
      url: 'https://miguelquispe.com/acerca-de-mi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: ['https://miguelquispe.com/images/cover-share-page.png'],
    },
    {
      url: 'https://miguelquispe.com/portfolio',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: ['https://miguelquispe.com/images/cover-share-page.png'],
    },
    {
      url: 'https://miguelquispe.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: ['https://miguelquispe.com/images/cover-share-page.png'],
    },
    ...posts.map((post) => ({
      url: `https://miguelquispe.com/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      news: {
        publication: {
          name: 'Miguel Quispe Blog',
          language: 'es',
        },
        publication_date: post.publishedAt,
        title: post.title,
        keywords: post.tags?.join(', ') || '',
      },
      images: post.image ? [`https://miguelquispe.com${post.image}`] : [],
    })),
  ];
}
