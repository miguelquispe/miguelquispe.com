import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import styles from './Post.module.scss';
import { PostMeta } from './types';

const PostHeader = ({ title, readingTime, publishedAt }: PostMeta) => {
  return (
    <header className={styles.header}>
      <h1 className="font-secondary">{title}</h1>

      <ul className={styles.meta}>
        <li>
          <img
            src="/images/avatar.jpg"
            className="avatar"
            width={24}
            height={24}
            alt="Miguel"
          />{' '}
          Miguel Quispe
        </li>
        {/* <li>En JavaScript</li> */}
        <li style={{ textTransform: 'capitalize' }}>
          {format(parseISO(publishedAt), 'MMMM dd, yyyy', {
            locale: es,
          })}
        </li>
        <li>{Math.ceil(readingTime)} min. lectura</li>
      </ul>
    </header>
  );
};

export default PostHeader;
