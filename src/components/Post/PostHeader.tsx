import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import Image from 'next/image';
import styles from './Post.module.scss';
import { PostMeta } from './types';

const PostHeader = ({
  title,
  readingTime,
  publishedAt,
  tags = [],
}: PostMeta) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>

      <ul className={styles.meta}>
        <li>
          <Image
            src="/images/avatar.jpg"
            className="avatar"
            width={24}
            height={24}
            alt="Miguel"
          />{' '}
          Miguel Quispe
        </li>

        <li style={{ textTransform: 'capitalize' }}>
          {format(parseISO(publishedAt), 'MMMM dd, yyyy', {
            locale: es,
          })}
        </li>
        <li>En {tags?.join(', ')}</li>
        <li>{Math.ceil(readingTime)} minutos de lectura</li>
      </ul>
    </header>
  );
};

export default PostHeader;
