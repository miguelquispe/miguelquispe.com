// 'use client';

import { PostCodepen, PostImage, PostLink } from '@components/Post';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

const components = {
  PostImage,
  a: PostLink,
  PostCodepen,
};

export default function MDXContent(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
