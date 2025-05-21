import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import styles from './Post.module.css';
import { PostMeta } from './types';

const PostItem = ({
  title,
  slug,
  readingTime,
  publishedAt,
  tags,
}: PostMeta) => {
  return (
    <article className={styles.main}>
      <h3>
        <Link href={`blog/${slug}`} prefetch>
          {title}
        </Link>
      </h3>
      <ul className={styles.meta}>
        <li style={{ textTransform: 'capitalize' }}>
          {format(parseISO(publishedAt), 'MMMM dd, yyyy', {
            locale: es,
          })}
        </li>
        {tags?.map((tag) => <li key={tag}>{tag}</li>)}
        <li>{readingTime} min. lectura</li>
      </ul>
    </article>
  );
};

export default PostItem;
