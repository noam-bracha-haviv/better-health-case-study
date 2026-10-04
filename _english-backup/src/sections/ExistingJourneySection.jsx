import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BoardFigure from '../components/BoardFigure/BoardFigure';
import { Highlight } from '../components/Highlight/Highlight';

export default function ExistingJourneySection() {
  return (
    <CaseStudySection id="existing-journey" label="Existing journey">
      <p>
        To see where the friction came from, I mapped the existing member
        journey from order to delivery across Better Health, the VR content
        partner, and the member, with the gaps at each stage.
      </p>
      <BoardFigure
        src="/assets/boards/patient-journey.jpg"
        full="/assets/boards/patient-journey-lg.jpg"
        alt="Swimlane table of the existing patient journey from order to delivery, with gaps and notes"
        ratio={2400 / 3102}
        caption="Existing journey, order to delivery: responsibilities per party, with gaps and open questions."
        fit="cover"
      />
      <p>
        The map made several gaps visible: shipping updates came only from the
        carrier, there was no follow-up after first use, and{' '}
        <Highlight>initial guidance was provided only after the box was opened.</Highlight>
      </p>

      <h3>Auditing the current onboarding</h3>
      <p>
        I then audited what happened after delivery. Onboarding depended on a
        scheduled call with a coach, who introduced the headset and
        controllers and walked the member through the first steps: connecting
        to Wi-Fi, signing in, and entering a PIN.
      </p>
      <BoardFigure
        src="/assets/boards/onboarding-audit.jpg"
        full="/assets/boards/onboarding-audit-lg.jpg"
        alt="Current onboarding audit flow: eligibility, device delivery, onboarding scheduling, coach call and device setup"
        ratio={2400 / 809}
        caption="Current onboarding audit: from eligibility and delivery to the coach call and device setup."
      />

      <h3>Setup and Wi-Fi as the main barriers</h3>
      <p>
        The hardest real-world step was Wi-Fi: getting the network name and
        password off a phone or computer and into a headset. It depended on
        information members often did not have at hand, and it only came up
        once the headset was already out of the box.
      </p>
      <p>
        This led to the key decision of the project:{' '}
        <Highlight>move preparation earlier in the journey,</Highlight> so
        members arrive at setup ready, and support those who don&rsquo;t inside
        the headset itself.
      </p>
    </CaseStudySection>
  );
}
