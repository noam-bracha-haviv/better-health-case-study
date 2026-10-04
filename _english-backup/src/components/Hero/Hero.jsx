import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Better Health <br />
          VR onboarding &amp; UX
        </h1>
        <p className={styles.subtitle}>
          Reducing the technological friction between receiving a VR headset
          at home and reaching a first VR wellness session, alongside the UX
          research behind the website redesign and onboarding UI
        </p>
      </div>
    </section>
  );
}
