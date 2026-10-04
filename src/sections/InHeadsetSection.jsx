import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import StageLabel from '../components/StageLabel/StageLabel';
import Caption from '../components/Caption/Caption';
import { Highlight, HighlightQuote } from '../components/Highlight/Highlight';

const opening = [
  {
    src: '/assets/final/01-brand.jpg',
    alt: 'Brand opening: Better Health, Your wellness, immersive',
    caption: 'Headset on: the brand holds the room while the app loads, then moves on by itself.',
  },
  {
    src: '/assets/final/02a-permission.jpg',
    alt: 'Headset system dialog asking to allow the app to find and connect to nearby devices',
    caption: 'Wi-Fi readiness starts with the headset’s own permission dialog, owned by the operating system.',
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
    alt: 'Step 1 of 5: First, open the Settings app on your iPhone',
    caption: 'The guide’s own steps and wording, one instruction at a time, no scrolling.',
  },
  {
    src: '/assets/final/03z-complete.jpg',
    alt: 'Betty: Great, now let’s connect. Connect to Wi-Fi',
    caption: 'Every help path hands back to the same connection screen.',
  },
];

const personalization = [
  {
    src: '/assets/final/07-betty.jpg',
    alt: 'Betty: Great, you’re ready. Four short questions. There are no right or wrong answers.',
    caption: 'Betty frames what comes next: four short questions, no right or wrong answers.',
  },
  {
    src: '/assets/final/08-q1.jpg',
    alt: 'What would you most like us to work on together? Reduce stress and anxiety, better manage chronic pain, improve my sleep, simply feel better day to day',
    caption: 'What the member would most like to work on.',
  },
  {
    src: '/assets/final/09-q2.jpg',
    alt: 'Have you tried anything in the past that helped you feel better?',
    caption: 'What has helped before.',
  },
  {
    src: '/assets/final/11-q4.jpg',
    alt: 'One last question. How would you like to begin? Something gentle and easy, jump right in, a recommendation, no preference',
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
      <p>
        I designed the in-headset onboarding flow. Earlier iterations kept more
        of the setup inside the headset; research led us to move Wi-Fi
        preparation earlier while keeping an in-headset fallback.
      </p>

      <h3>Opening and Wi-Fi readiness</h3>
      <p>
        The flow opens on the Better Health brand while the app loads, then
        asks for the headset&rsquo;s Wi-Fi permission. Betty follows with a
        single question:{' '}
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
        So we brought a small taste of the experience forward. Right after the
        headset connects, a short preview shows the member where their sessions
        will take them, before the flow asks for any more effort. The idea is{' '}
        <Highlight>value before questions:</Highlight> experience something
        first, then continue into the guided questions. It&rsquo;s a
        research-informed design decision, not a measured outcome, and the
        preview film is still a placeholder.
      </p>
      <div className="stack-16">
        <StageLabel>Final flow &middot; Preview (video placeholder)</StageLabel>
        <MediaFrame src="/assets/final/05-preview.jpg" alt="VR experience preview: This is where your sessions will take you" ratio={16 / 9} square />
      </div>

      <p>
        After the preview, the flow moves into the controller guide, a separate
        interactive VR module where members practise using the controllers
        themselves. It sits in the flow as a placeholder; the module itself is
        not part of my design work.
      </p>
      <div className="stack-16">
        <StageLabel>Placeholder &middot; Controller guide</StageLabel>
        <MediaFrame src="/assets/final/06-controller.jpg" alt="Placeholder for the interactive controller guide" ratio={16 / 9} square />
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
