/** @type {import('next').NextConfig} */

import { NextConfig } from 'next';

// import nextMDX from '@next/mdx';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
