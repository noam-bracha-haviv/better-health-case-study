import { useRef, useState } from 'react';
import { asset } from '../../utils/asset';
import styles from './ImageGallery.module.css';

/**
 * Single-image horizontal gallery: one slide fills the column at a time,
 * advanced by arrows, drag, or arrow keys. The track only ever translates on
 * the X axis. With `scrollable`, each slide shows its image at full width and
 * a taller screen scrolls vertically inside its own slide instead of being
 * cropped. Each image may carry a `caption`, shown under the dots.
 */
export default function ImageGallery({
  images,
  ratio = 387 / 288,
  border = 'pink',
  label = 'Photo gallery',
  scrollable = false,
}) {
  const [index, setIndex] = useState(0);
  const drag = useRef({ active: false, startX: 0, moved: false });
  const count = images.length;

  const goTo = (next) => setIndex(Math.min(count - 1, Math.max(0, next)));

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    // Arrow buttons live inside the viewport; capturing their pointer would
    // retarget the click away from the button.
    if (e.target.closest('button')) return;
    drag.current = { active: true, startX: e.clientX, moved: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    if (Math.abs(e.clientX - drag.current.startX) > 5) drag.current.moved = true;
  };

  const onPointerUp = (e) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.active = false;
    if (Math.abs(dx) > 40) {
      goTo(dx < 0 ? index + 1 : index - 1);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') goTo(index + 1);
    if (e.key === 'ArrowLeft') goTo(index - 1);
  };

  const borderClass =
    border === 'olive' ? styles.borderOlive : border === 'none' ? styles.borderNone : styles.borderPink;

  return (
    <div
      className={styles.gallery}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div
        className={`${styles.viewport} ${borderClass}`}
        style={{ aspectRatio: ratio }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className={styles.track}
          style={{
            width: `${count * 100}%`,
            transform: `translateX(-${(100 / count) * index}%)`,
          }}
        >
          {images.map((img) => (
            <div
              className={`${styles.slide} ${scrollable ? styles.slideScroll : ''}`}
              key={img.src}
              style={{ width: `${100 / count}%` }}
            >
              <img
                className={scrollable ? styles.mediaFull : styles.media}
                src={asset(img.src)}
                alt={img.alt}
                draggable={false}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous image"
        >
          <ArrowIcon flip />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => goTo(index + 1)}
          disabled={index === count - 1}
          aria-label="Next image"
        >
          <ArrowIcon />
        </button>
      </div>

      <div className={styles.dots}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1} of ${count}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>

      {images[index].caption && (
        <div className={styles.captionRow} aria-live="polite">
          <span className={styles.counter}>
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <span className={styles.caption}>{images[index].caption}</span>
        </div>
      )}
    </div>
  );
}

function ArrowIcon({ flip = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
