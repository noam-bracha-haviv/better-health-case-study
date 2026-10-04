import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import ImageRow from '../components/ImageRow/ImageRow';
import StageLabel from '../components/StageLabel/StageLabel';
import Caption from '../components/Caption/Caption';

export default function HandoffSection() {
  return (
    <CaseStudySection id="handoff" label="Handoff & status">
      <p>
        Previously, reaching PsyTechVR meant another sign-in step, with its own
        access details, right at the moment a member was ready to begin. In the
        final flow, we removed that barrier: after &ldquo;You&rsquo;re all
        set,&rdquo; Begin Session takes the member straight into the start of
        their PsyTechVR session, with no separate login in between.
      </p>
      <p>
        Two products, one continuous journey. The session itself then runs in
        PsyTechVR.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow</StageLabel>
        <ImageRow>
          <MediaFrame src="/assets/final/13-all-set.jpg" alt="You’re all set. Your first session is ready for you. Begin Session" ratio={16 / 9} square />
          <MediaFrame src="/assets/final/14-handoff.jpg" alt="Handing off to PsyTechVR" ratio={16 / 9} square />
        </ImageRow>
        <Caption>From &ldquo;You&rsquo;re all set&rdquo; directly into PsyTechVR, without another sign-in.</Caption>
      </div>

      <h3>Status</h3>
      <p>
        The Pre-Arrival Guide has been designed and implemented. The in-headset
        onboarding experience has been fully designed and is currently in
        development.
      </p>
    </CaseStudySection>
  );
}
