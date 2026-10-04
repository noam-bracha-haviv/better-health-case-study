import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import Caption from '../components/Caption/Caption';
import { Highlight, HighlightQuote } from '../components/Highlight/Highlight';

export default function ProblemSection() {
  return (
    <CaseStudySection id="problem" label="Problem">
      <p>
        Better Health ships VR headsets to members&rsquo; homes for therapeutic
        sessions focused on mental health and pain management. Many of these
        members are older adults.
      </p>
      <p>
        Between opening the box and starting a first session, a member has to
        charge the headset, turn it on, learn the controllers, connect to
        Wi-Fi, and sign in to the therapy app.{' '}
        <Highlight>Each of these steps is a point where the journey can stall</Highlight>{' '}
        before the product has had a chance to prove its value.
      </p>

      <div className="stack-16">
        <MediaFrame
          src="/assets/vr/quest-library.jpg"
          alt="The headset's home library with the Xaia, PsyTech VR and Better Health apps"
          ratio={1500 / 992}
          border="olive"
        />
        <Caption>
          The headset&rsquo;s home library, where every member&rsquo;s path to
          a first session begins.
        </Caption>
      </div>

      <div className="stack-16">
        <HighlightQuote>
        &ldquo;Technology should be easier to understand. Many people in this
        Medicare program are older. The setup almost made me give up
        entirely.&rdquo;
        </HighlightQuote>
        <Caption>Member interview, VR therapy program</Caption>
      </div>
    </CaseStudySection>
  );
}
