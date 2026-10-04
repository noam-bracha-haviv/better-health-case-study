import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import styles from './PathGallery.module.css';

/**
 * Segmented selector over one ImageGallery. Switching path remounts the
 * gallery (keyed by path) so it always starts from that path's first screen.
 */
export default function PathGallery({ paths }) {
  const [activeKey, setActiveKey] = useState(paths[0].key);
  const active = paths.find((p) => p.key === activeKey);

  return (
    <div className={styles.wrap}>
      <div className={styles.toggle} role="tablist" aria-label="Onboarding entry path">
        {paths.map((p) => (
          <button
            key={p.key}
            type="button"
            role="tab"
            aria-selected={p.key === activeKey}
            className={`${styles.option} ${p.key === activeKey ? styles.optionActive : ''}`}
            onClick={() => setActiveKey(p.key)}
          >
            {p.label}
          </button>
        ))}
      </div>
      <span className={styles.summary}>{active.summary}</span>
      <ImageGallery
        key={active.key}
        images={active.screens}
        ratio={16 / 10}
        border="olive"
        label={`${active.label} onboarding screens`}
        scrollable
      />
    </div>
  );
}
