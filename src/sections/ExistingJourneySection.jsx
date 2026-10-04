import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BoardFigure from '../components/BoardFigure/BoardFigure';
import { Highlight } from '../components/Highlight/Highlight';

export default function ExistingJourneySection() {
  return (
    <CaseStudySection id="existing-journey" label="Existing journey">
      <p>
        The research showed what went wrong. To see where it happened, I mapped
        the existing member journey from order to delivery across Better
        Health, PsyTechVR, and the member, noting the gaps at each stage.
      </p>
      <BoardFigure
        label="Existing"
        src="/assets/boards/patient-journey.jpg"
        full="/assets/boards/patient-journey-lg.jpg"
        alt="Swimlane table of the existing patient journey from order to delivery, with gaps and notes"
        ratio={2400 / 3102}
        caption="Order to delivery: what each party does at each stage, with gaps and open questions."
        square
      />
      <p>
        Shipping updates came only from the carrier, there was no follow-up
        after first use, and{' '}
        <Highlight>the first guidance a member received arrived only once the box was open.</Highlight>
      </p>
      <p>
        After delivery, everything depended on a scheduled call with a coach,
        who introduced the headset and controllers and talked the member
        through Wi-Fi, sign-in, and their PIN.
      </p>
      <BoardFigure
        label="Existing"
        src="/assets/boards/onboarding-audit.jpg"
        full="/assets/boards/onboarding-audit-lg.jpg"
        alt="Current onboarding flow: eligibility, device delivery, onboarding scheduling, coach call and device setup"
        ratio={2400 / 809}
        caption="The existing onboarding: from delivery to a live coach call and device setup."
        square
      />
      <p>
        Put together, the map showed that the hardest part of setup landed at
        a single point: after unboxing, inside an unfamiliar headset, during a
        live call.
      </p>
    </CaseStudySection>
  );
}
