import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

type PostLinkProps = {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

const PostLink = (props: PostLinkProps) => {
  const href = props.href;
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link {...props}>{props.children}</Link>;
  }

  if (isAnchorLink) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export default PostLink;
