import styles from './StageLabel.module.css';

/** Marks an artifact as Existing, Earlier iteration or Final flow. */
export default function StageLabel({ children }) {
  return <span className={styles.label}>{children}</span>;
}
