import styles from './ChapterIntro.module.css';

/**
 * Opens a chapter inside <main>. Uses the same kicker + body type as
 * CaseStudySection, with one heading step between the hero and the
 * section subheadings.
 */
export default function ChapterIntro({ id, number, title, children }) {
  return (
    <header id={id} className={styles.chapter}>
      <p className={styles.kicker}>Chapter {number}</p>
      <h2 className={styles.title}>{title}</h2>
      {children && <p className={styles.text}>{children}</p>}
    </header>
  );
}
