import styles from './Available.module.css';

const Available = () => {
  return (
    <div>
      <a
        href="mailto:dev@miguelquispe.com"
        // className="available-link"
        className={`available-link ${styles.available}`}
        title="¡Disponible para proyectos!"
      >
        <span className={styles.available__dot} />
        <span className={styles.available__text}>Disponible</span>
      </a>
    </div>
  );
};

export default Available;
