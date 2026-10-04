import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import { Highlight } from '../components/Highlight/Highlight';

export default function ProblemSection() {
  return (
    <CaseStudySection id="problem" label="Problem">
      <p>
        Members receive a VR headset at home for therapeutic sessions focused
        on mental health and pain management. Before a member
        can experience any of that value, they first have to get through
        unfamiliar hardware: a headset, two controllers, Wi-Fi setup, and a
        new kind of interface.
      </p>
      <p>
        The challenge wasn&rsquo;t only to teach VR. It was to{' '}
        <Highlight>reduce how much a member has to figure out alone</Highlight>{' '}
        before reaching their first session.
      </p>
      <p>
        The timing mattered too. Better Health was moving from its previous VR
        platform, XRHealth, to PsyTechVR, which created an opportunity to
        rethink onboarding rather than carry the old one over.
      </p>
    </CaseStudySection>
  );
}
