import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import LaptopPreview from '../components/LaptopPreview/LaptopPreview';
import StageLabel from '../components/StageLabel/StageLabel';
import { asset } from '../utils/asset';
import { LINKS } from '../data/links';
import styles from './PreArrivalSection.module.css';

const moments = [
  {
    src: '/assets/prearrival/01-welcome.jpg',
    title: 'Prepare early',
    text: 'Wi-Fi details ready before the headset arrives.',
    alt: 'Your headset is arriving soon: make sure you have your Wi-Fi details ready. Start the Wi-Fi guide',
  },
  {
    src: '/assets/prearrival/02-device.jpg',
    title: 'Choose device',
    text: 'iPhone, Android, Mac or Windows.',
    alt: 'Which device do you have with you right now? iPhone, Android phone, Mac, Windows PC',
  },
  {
    src: '/assets/prearrival/03-step1.jpg',
    title: 'Step by step',
    text: 'One instruction per screen, with the device’s own UI.',
    alt: 'Let’s find your Wi-Fi password together. First, open the Settings app on your iPhone',
  },
  {
    src: '/assets/prearrival/04-ready.jpg',
    title: 'Ready',
    text: 'Confirmation, and details kept nearby.',
    alt: 'Great! You’re ready. Keep your Wi-Fi details nearby for when your headset arrives',
  },
];

export default function PreArrivalSection() {
  return (
    <CaseStudySection id="pre-arrival" label="Pre-Arrival Guide">
      <StageLabel>Live in production</StageLabel>
      <p>
        I designed the Pre-Arrival Guide, a short mobile-first web experience
        that helps members find their Wi-Fi name and password before the
        headset arrives. Members choose the device they have with them, iPhone,
        Android, Mac, or Windows, and follow one step at a time until they
        have their details ready for setup.
      </p>
      <p>
        Beyond the Figma designs, I built an interactive, responsive prototype
        of the guide in HTML, CSS and JavaScript with Claude Code, and
        contributed it to the product repository through a GitHub pull
        request. Better Health&rsquo;s engineering team built the production
        version, which is now live for members.
      </p>

      <div className={styles.moments}>
        <StageLabel>Key moments</StageLabel>
        <ol className={styles.flow}>
          {moments.map((m, i) => (
            <li className={styles.step} key={m.src}>
              <img className={styles.shot} src={asset(m.src)} alt={m.alt} loading="lazy" />
              <span className={styles.stepTitle}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                {m.title}
              </span>
              <span className={styles.stepText}>{m.text}</span>
            </li>
          ))}
        </ol>
      </div>

      <h3 className={styles.tryTitle}>Try the experience</h3>
      <p>The live guide runs inside the frame below. Click through it as a member would.</p>
      <LaptopPreview
        src={LINKS.preArrivalInteractive}
        href={LINKS.preArrivalLive}
        title="Better Health VR Pre-Arrival Guide, running live"
        openLabel="View live experience"
      />
    </CaseStudySection>
  );
}
