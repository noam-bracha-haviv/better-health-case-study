import styles from './IntroBlurb.module.css';

const AREAS = [
  { number: '01', title: 'VR Onboarding', role: 'Research & Product Design' },
  { number: '02', title: 'Website & Onboarding', role: 'UX Research & UI Design' },
];

export default function IntroBlurb() {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        <span className={styles.kicker}>Case study</span>
        <div className={styles.text}>
          <p>
            Better Health is a digital health company supporting older adults
            with medical supplies, peer support, and at-home care, including a
            VR therapy program.
          </p>
          <ol className={styles.areas}>
            {AREAS.map((area) => (
              <li className={styles.area} key={area.number}>
                <span className={styles.areaTitle}>
                  <span className={styles.areaNum}>{area.number}</span>
                  {area.title}
                </span>
                <span className={styles.areaRole}>{area.role}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
