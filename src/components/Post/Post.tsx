import Link from 'next/link'
import styles from './Post.module.scss'

const Post = ({ title, slug }: { title: string; slug: string }) => {
  return (
    <article className={styles.main}>
      <h3>
        <Link href={`blog/${slug}`} passHref>
          <a>{title}</a>
        </Link>
      </h3>

      <p className={styles.postmeta}>
        <time>5 noviembre, 2012</time>
      </p>
    </article>
  )
}

export default Post
