import styles from './KeyList.module.css';

/**
 * A short list of titled points (touchpoints, principles). Two columns on
 * desktop with hairline dividers, one column on mobile.
 */
export default function KeyList({ items, columns = 2 }) {
  return (
    <dl className={`${styles.list} ${columns === 1 ? styles.single : ''}`}>
      {items.map((item) => (
        <div className={styles.item} key={item.title}>
          <dt className={styles.title}>{item.title}</dt>
          <dd className={styles.text}>{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
