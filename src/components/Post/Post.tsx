import Link from 'next/link'
import styles from './Post.module.scss'

const Post = ({ title, slug }: { title: string; slug: string }) => {
  return (
    <article className={styles.main}>
      <Link href={`blog/${slug}`} passHref>
        <a>{title}</a>
      </Link>

      <p className={styles.postmeta}>
        <time>5 noviembre, 2012</time>
      </p>
    </article>
  )
}

export default Post
