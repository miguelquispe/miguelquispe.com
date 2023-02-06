import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import styles from './Post.module.scss';
import { PostMeta } from './types';

const PostItem = ({ title, slug, publishedAt, tags }: PostMeta) => {
  return (
    <article className={styles.main}>
      <h3 className="font-primary">
        <Link href={`blog/${slug}`} passHref>
          <a>{title}</a>
        </Link>
      </h3>
      <ul className={styles.meta}>
        <li style={{ textTransform: 'capitalize' }}>
          {format(parseISO(publishedAt), 'MMMM dd, yyyy', {
            locale: es,
          })}
        </li>
        {tags?.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
};

export default PostItem;
