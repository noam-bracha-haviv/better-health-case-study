import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import StageLabel from '../components/StageLabel/StageLabel';
import Caption from '../components/Caption/Caption';
import { Highlight, HighlightQuote } from '../components/Highlight/Highlight';
import { asset } from '../utils/asset';
import styles from './InHeadsetSection.module.css';

const opening = [
  {
    src: '/assets/final/01-brand.jpg',
    alt: 'Brand opening: Better Health, Your wellness, immersive',
    caption: 'Headset on: the brand holds the room while the app loads, then moves on by itself.',
  },
  {
    src: '/assets/final/02b-branch.jpg',
    alt: 'Betty: Let’s get you connected. Do you have your Wi-Fi name and password ready? I have them / I need help finding them',
    caption: 'Betty asks one question, with two large, self-explaining answers.',
  },
];

const helpPath = [
  {
    src: '/assets/final/03a-device.jpg',
    alt: 'Betty: Let’s find your Wi-Fi details. Which device do you have with you right now? iPhone, Android phone, Mac, Windows PC',
    caption: 'The same four devices as the Pre-Arrival Guide.',
  },
  {
    src: '/assets/final/03-iphone-1.jpg',
    alt: 'Betty, with a segmented progress bar: First, open the Settings app on your iPhone. Back / Done',
    caption: 'The guide’s own steps and wording, one instruction at a time, no scrolling.',
  },
  {
    src: '/assets/final/03z-complete.jpg',
    alt: 'Betty: Great, now let’s connect. Connect to Wi-Fi',
    caption: 'Every help path hands back to the same connection screen.',
  },
];

const controllerGuide = [
  {
    src: '/assets/final/06c-trigger.jpg',
    alt: 'Controller guide, step 3 of 7: Squeeze the trigger, with the trigger highlighted on the controller',
    caption: 'One control per step, with the control highlighted on the controller itself.',
  },
  {
    src: '/assets/final/06e-press-a.jpg',
    alt: 'Controller guide, step 5 of 7: Press A (Right Controller), with the A button highlighted',
    caption: 'Each step names the exact button and which hand it is on.',
  },
  {
    src: '/assets/final/06g-point.jpg',
    alt: 'Controller guide, step 7 of 7: Point and press, with the controller aiming at a target',
    caption: 'The last step brings the controls together: point at a target and press.',
  },
];

const personalization = [
  {
    src: '/assets/final/07-betty.jpg',
    alt: 'Betty: Great, you’re ready. Now I’d like to get to know you a little, so we can personalize your experience. Four short questions, there are no right or wrong answers. Let’s go',
    caption: 'Betty frames what comes next: four short questions, no right or wrong answers.',
  },
  {
    src: '/assets/final/08-q1.jpg',
    alt: 'What would you most like us to work on together? Reduce stress and anxiety, better manage chronic pain, improve my sleep, simply feel better day to day',
    caption: 'What the member would most like to work on.',
  },
  {
    src: '/assets/final/10-q3.jpg',
    alt: 'Where would you feel most comfortable starting? By the ocean, in nature, somewhere warm and peaceful, surprise me',
    caption: 'Where they’d feel most comfortable starting.',
  },
  {
    src: '/assets/final/11-q4.jpg',
    alt: 'How would you like to begin? Something gentle and easy, I’m ready to jump right in, I’d like you to recommend where to start, I don’t have a preference',
    caption: 'The pace they’d like to begin at. The same pattern throughout, with no new mechanics.',
  },
  {
    src: '/assets/final/12-preparing.jpg',
    alt: 'Betty: Thank you for sharing that with me. I’m getting your first session ready for you.',
    caption: 'Betty acknowledges the answers while the first session is prepared.',
  },
];

export default function InHeadsetSection() {
  return (
    <CaseStudySection id="in-headset" label="In-headset onboarding">
      <StageLabel>Designed · In development</StageLabel>
      <p>
        I defined and designed the in-headset onboarding: the overall flow, how
        it behaves, and the UX/UI. That meant mapping every path a member could
        take between putting on the headset and starting their first session,
        including the states in between, the device-specific help paths, and
        the points where a member who is stuck can recover and continue. I
        worked through these decisions with the Head of Product, presenting
        each direction, taking feedback, and iterating.
      </p>
      <p>
        Earlier iterations kept more of the setup inside the headset. With
        Wi-Fi preparation moved earlier, the headset no longer has to carry the
        whole setup, but it still has to work for members who never prepared.
      </p>
      <div className="stack-16">
        <StageLabel>Final in-headset flow</StageLabel>
        <div className={styles.mapScroll}>
          <img
            className={styles.map}
            src={asset('/assets/final/flow-map.png')}
            alt="Map of the in-headset onboarding: eight stages from the opening to the hand-off to PsyTechVR, and a help path with four device-specific step sequences that all return to the Wi-Fi connection screen"
            loading="lazy"
          />
        </div>
        <Caption>The complete in-headset flow: 40+ screens and states, including four device-specific help paths that all return to the same connection screen.</Caption>
      </div>

      <h3>Opening and Wi-Fi readiness</h3>
      <p>
        The flow opens on the Better Health brand while the app loads. Betty
        then asks a single question:{' '}
        <Highlight>does the member have their Wi-Fi name and password ready?</Highlight>{' '}
        It asks what they need now, not whether they completed the Pre-Arrival
        Guide.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow</StageLabel>
        <ImageGallery images={opening} ratio={16 / 9} border="none" square label="Opening and Wi-Fi readiness" />
      </div>

      <h3>Two paths forward</h3>
      <p>
        &ldquo;I have them&rdquo; goes straight to the connection screen.
        Connecting is required to continue: Begin Onboarding only becomes
        available once the headset is online.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow &middot; I have them</StageLabel>
        <MediaFrame src="/assets/final/04e-connected.jpg" alt="Connect to your Wi-Fi: connected, with Begin Onboarding enabled" ratio={16 / 9} square />
        <Caption>Once the headset is connected, Begin Onboarding becomes the primary action.</Caption>
      </div>
      <p>
        &ldquo;I need help finding them&rdquo; brings the Pre-Arrival
        Guide&rsquo;s steps into the headset, for the device the member has
        with them, and then returns to the same connection screen. For members
        who never prepared, this fallback is what keeps the flow from
        dead-ending.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow &middot; I need help finding them</StageLabel>
        <ImageGallery images={helpPath} ratio={16 / 9} border="none" square label="Wi-Fi help path" />
      </div>

      <h3>Value before questions</h3>
      <p>
        On the calls, some of the strongest positive reactions came once
        members finally experienced VR, often only after a long setup. As the
        experience loaded, one member said:
      </p>
      <div className="stack-16">
        <HighlightQuote>&ldquo;This is really something, I tell you.&rdquo;</HighlightQuote>
        <Caption>A member, during a recorded onboarding call</Caption>
      </div>
      <p>
        So I brought a small taste of the experience forward. Right after the
        headset connects, a short preview shows the member where their sessions
        will take them, then moves on by itself, before the flow asks for any
        more effort. The idea is{' '}
        <Highlight>value before questions:</Highlight> experience something
        first, then continue into the guided questions. It&rsquo;s a
        research-informed design decision, not a measured outcome, and the
        preview film is still a placeholder.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow &middot; Preview (video placeholder)</StageLabel>
        <MediaFrame src="/assets/final/05-preview.jpg" alt="Placeholder for the VR experience preview film: a mountain landscape" ratio={16 / 9} square />
      </div>

      <p>
        After the preview, the flow moves into the controller guide: seven short
        steps that teach the controls one at a time, from squeezing the trigger
        to pointing and pressing. I designed the guidance screens and
        integrated them into the onboarding flow; the interactive controller
        module itself is being developed separately by Andrés.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow &middot; Controller guide</StageLabel>
        <ImageGallery images={controllerGuide} ratio={16 / 9} border="none" square label="Controller guide" />
      </div>

      <h3>Betty and guided personalization</h3>
      <p>
        I created Betty and designed her role as a voice-guided layer across
        the flow. She is grounded in how coaches actually ran onboarding calls:
        speaking plainly, pacing each step, and reassuring members as they go.
      </p>
      <p>
        The calls also showed that coaches rarely relied on intake-style
        questions; personal information tended to come up naturally in
        conversation. So Betty&rsquo;s questions are written to feel like
        genuine curiosity and the start of a conversation,{' '}
        <Highlight>not another intake form.</Highlight>
      </p>
      <p>
        Before the first session, she asks four calm, short questions: what the
        member would like to work on, what has helped before, where they&rsquo;d
        like to start, and their pace. There are no right or wrong answers, a
        direct response to the fear of making mistakes that came up again and
        again on the calls. Each question offers a few large, simple choices,
        and every question uses the same pattern, with no new mechanics along
        the way. The goal is a first experience that feels personally relevant
        while the member stays in control of their choices, not a clinical
        assessment.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow</StageLabel>
        <ImageGallery images={personalization} ratio={16 / 9} border="none" square label="Betty and personalization questions" />
      </div>
    </CaseStudySection>
  );
}
