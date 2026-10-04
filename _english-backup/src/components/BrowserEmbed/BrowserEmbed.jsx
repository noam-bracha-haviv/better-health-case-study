import { useEffect, useRef, useState } from 'react';
import { asset } from '../../utils/asset';
import frame from '../BeforeAfter/BeforeAfter.module.css';
import styles from './BrowserEmbed.module.css';

/**
 * The embedded guide switches to a stacked layout below 900px, so — as in
 * LaptopPreview — the iframe is always laid out on a fixed desktop canvas
 * and scaled down to the frame's width. That keeps the real desktop design
 * visible inside the 800px content column.
 */
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 750; // 16:10

/**
 * A live page running inside the same flat browser frame as BeforeAfter.
 * The page is interactive in place; the caption link opens it on its own.
 */
export default function BrowserEmbed({ src, title, url, openLabel }) {
  const screenRef = useRef(null);
  const [scale, setScale] = useState(null);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const measure = () => {
      const width = el.clientWidth;
      if (width) setScale(width / CANVAS_WIDTH);
    };
    measure();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className={styles.figure}>
      <div className={frame.frame}>
        <div className={frame.chrome} aria-hidden="true">
          <span className={frame.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={frame.url}>{url}</span>
        </div>
        <div className={styles.screen} ref={screenRef}>
          {scale !== null && (
            <iframe
              className={styles.site}
              src={asset(src)}
              title={title}
              loading="lazy"
              style={{
                width: `${CANVAS_WIDTH}px`,
                height: `${CANVAS_HEIGHT}px`,
                transform: `scale(${scale})`,
              }}
            />
          )}
        </div>
      </div>
      <figcaption className={styles.caption}>
        <a className={styles.link} href={asset(src)} target="_blank" rel="noopener noreferrer">
          {openLabel} &#8599;
        </a>
      </figcaption>
    </figure>
  );
}
