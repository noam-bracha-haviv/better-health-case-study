import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BrowserEmbed from '../components/BrowserEmbed/BrowserEmbed';
import { LINKS } from '../data/links';

export default function PreArrivalSection() {
  return (
    <CaseStudySection id="pre-arrival" label="Pre-Arrival Guide">
      <p>
        The first piece of the new journey happens before the headset arrives.
        The Pre-Arrival Guide is a digital guide that prepares members for the
        Wi-Fi step and shows them, one screen at a time, what they will see in
        the headset: the three setup steps, signing in, and how to get back to
        the main library at any point.
      </p>
      <p>
        Members can return to it at any time once the headset is in their
        hands. <strong>The Pre-Arrival Guide is implemented and live.</strong>
      </p>
      <BrowserEmbed
        src={LINKS.preArrivalGuide}
        title="Better Health VR Pre-Arrival Guide, running live"
        url="Better Health · VR Pre-Arrival Guide"
        openLabel="Open the Pre-Arrival Guide"
      />
    </CaseStudySection>
  );
}
