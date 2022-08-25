import Container from '@components/Container/Container'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr />
        <div className="u-flex u-flexJustifyBetween">
          <p className={styles.copyright}>Miguel Quispe 2022</p>
          <nav className="u-flex">
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/quispemiguel/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a href="https://github.com/miguelquispe" target="_blank">
                GitHub
              </a>
            </div>
            <div>
              <a href="https://twitter.com/miguelquispecom" target="_blank">
                Twitter
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
