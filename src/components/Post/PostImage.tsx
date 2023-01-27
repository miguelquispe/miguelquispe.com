import Image, { ImageProps } from 'next/image';
import { HTMLProps } from 'react';

const PostImage = (props: HTMLProps<HTMLImageElement>) => {
  return (
    <div className="post-image">
      <Image {...(props as ImageProps)} layout="responsive" />
    </div>
  );
};

export default PostImage;
