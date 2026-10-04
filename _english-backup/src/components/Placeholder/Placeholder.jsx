import styles from './Placeholder.module.css';

/** Reserved slot for media that does not exist yet. */
export default function Placeholder({ label, note, ratio = 16 / 9 }) {
  return (
    <div className={styles.box} style={{ aspectRatio: ratio }}>
      <span className={styles.label}>[{label}]</span>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  );
}
