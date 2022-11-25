import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import styles from './Post.module.scss';
import { PostMeta } from './types';

const PostItem = ({ title, slug, readingTime, publishedAt }: PostMeta) => {
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
        {/* <li>JavaScript</li> */}
        <li>{Math.ceil(readingTime)} min. lectura</li>
      </ul>
    </article>
  );
};

export default PostItem;
