import MediaFrame from '../MediaFrame/MediaFrame';
import Caption from '../Caption/Caption';
import { asset } from '../../utils/asset';
import styles from './BoardFigure.module.css';

/**
 * A wide research/flow board: the web-size export in the content column,
 * plus a link to the high-resolution export for reading the details.
 */
export default function BoardFigure({ src, full, alt, ratio, caption, fit = 'cover' }) {
  return (
    <div className="stack-16">
      <a className={styles.link} href={asset(full || src)} target="_blank" rel="noopener noreferrer">
        <MediaFrame src={src} alt={alt} ratio={ratio} border="olive" fit={fit} />
      </a>
      <div className={styles.captionRow}>
        {caption && <Caption>{caption}</Caption>}
        <a className={styles.open} href={asset(full || src)} target="_blank" rel="noopener noreferrer">
          Open full size &#8599;
        </a>
      </div>
    </div>
  );
}
