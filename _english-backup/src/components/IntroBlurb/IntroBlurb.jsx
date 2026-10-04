import { Highlight } from '../Highlight/Highlight';
import styles from './IntroBlurb.module.css';

export default function IntroBlurb() {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <span className={styles.kicker}>Case study</span>
        <p className={styles.text}>
          Better Health provides medical supplies, peer support, and an at-home
          VR therapy program for members covered by Medicare and Medicaid. As a
          product designer, I worked across research, service journeys, and UI,
          from{' '}
          <Highlight>the at-home VR onboarding journey</Highlight> to the UX
          research behind the website redesign and the onboarding UI for two
          member entry paths.
        </p>
      </div>
    </div>
  );
}
