import { asset } from '../../utils/asset';
import styles from './Hero.module.css';

/* The four-point star from the Better Health logo, drawn as the line-star
   motif used across the redesigned website. */
function LineStar({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 3 C54 36 64 46 97 50 C64 54 54 64 50 97 C46 64 36 54 3 50 C36 46 46 36 50 3Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <img className={styles.logo} src={asset('/assets/brand/logo-white.png')} alt="Better Health" />
        <h1 className={styles.title}>
          <span className={styles.srOnly}>Better Health </span>
          UX/UI &amp; <br />
          Product Design
        </h1>
        <p className={styles.subtitle}>
          Reducing the friction between receiving a VR headset at home and
          reaching a first wellness session
        </p>
      </div>
      <LineStar className={`${styles.star} ${styles.starLavender}`} />
      <LineStar className={`${styles.star} ${styles.starMint}`} />
    </section>
  );
}
