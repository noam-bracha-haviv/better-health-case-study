import { useRef, useState } from 'react';
import { asset } from '../../utils/asset';
import styles from './BeforeAfter.module.css';

/**
 * BEFORE | AFTER toggle over one fixed-height, unframed page view. The long page
 * export scrolls vertically inside the frame; switching keeps the visitor
 * at the same relative depth so the two versions can be compared section
 * by section.
 */
export default function BeforeAfter({ before, after }) {
  const [view, setView] = useState('before');
  const scrollRef = useRef(null);
  const pages = { before, after };

  const switchTo = (next) => {
    if (next === view) return;
    const el = scrollRef.current;
    const max = el ? el.scrollHeight - el.clientHeight : 0;
    const ratio = el && max > 0 ? el.scrollTop / max : 0;
    setView(next);
    requestAnimationFrame(() => {
      const target = scrollRef.current;
      if (!target) return;
      const img = target.querySelector('img');
      const apply = () => {
        target.scrollTop = ratio * (target.scrollHeight - target.clientHeight);
      };
      if (img && !img.complete) img.addEventListener('load', apply, { once: true });
      else apply();
    });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.toggle} role="tablist" aria-label="Compare versions">
        {['before', 'after'].map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={view === key}
            className={`${styles.option} ${view === key ? styles.optionActive : ''}`}
            onClick={() => switchTo(key)}
          >
            {key === 'before' ? 'Before' : 'After'}
          </button>
        ))}
      </div>

      <div className={styles.frame}>
        <div className={styles.viewport} ref={scrollRef} tabIndex={0} aria-label={`${view} page, scrollable`}>
          <img key={view} className={styles.page} src={asset(pages[view].src)} alt={pages[view].alt} />
        </div>
      </div>
      <span className={styles.hint}>Scroll inside the frame to see the full page.</span>
    </div>
  );
}
