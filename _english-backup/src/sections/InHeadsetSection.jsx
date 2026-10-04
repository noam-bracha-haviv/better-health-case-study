import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import MediaFrame from '../components/MediaFrame/MediaFrame';
import ImageRow from '../components/ImageRow/ImageRow';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Placeholder from '../components/Placeholder/Placeholder';
import Caption from '../components/Caption/Caption';
import { Highlight } from '../components/Highlight/Highlight';

const wifiHelp = [
  { src: '/assets/vr/connect-intro.jpg', alt: 'Betty: Now let’s connect your headset to your home Wi-Fi. This only needs to be done once.', caption: 'Betty introduces the Wi-Fi step, framed as a one-time task.' },
  { src: '/assets/vr/device-picker.jpg', alt: 'Betty offers to help find the Wi-Fi name and password and asks which device the member has: iPhone, Android, Mac or Windows PC', caption: 'No Wi-Fi details at hand? Betty asks which device the member has with them.' },
  { src: '/assets/vr/iphone-step1.jpg', alt: 'Step 1 of 5: open the Settings app on your iPhone', caption: 'One instruction per screen, with the phone’s own UI shown next to it.' },
  { src: '/assets/vr/iphone-step3.jpg', alt: 'Step 3 of 5: tap the information button next to your home Wi-Fi network', caption: 'Progress is always visible, and each step asks for a single tap.' },
  { src: '/assets/vr/iphone-step5.jpg', alt: 'Step 5 of 5: your iPhone may ask for Face ID or your passcode; write the password down', caption: 'The last step anticipates the phone’s security prompt before it appears.' },
  { src: '/assets/vr/connect-network.jpg', alt: 'Connect to your Wi-Fi network: choose your network from the list and enter the password', caption: 'Back in the headset: choosing the network and entering the password.' },
  { src: '/assets/vr/return-main.jpg', alt: 'Betty shows the Meta button on the right controller used to return to the main screen', caption: 'Learning how to get back to the main screen, a way out that works from anywhere.' },
];

const personalization = [
  { src: '/assets/vr/betty-intro.jpg', alt: 'Betty: Now that everything is ready, I’d love to get to know you a little better. There are no right or wrong answers.', caption: 'A few simple questions, with no right or wrong answers.' },
  { src: '/assets/vr/betty-q1.jpg', alt: 'Betty asks whether the member has tried anything in the past that helped them feel better', caption: 'What has helped before.' },
  { src: '/assets/vr/betty-q2.jpg', alt: 'Betty asks where the member would feel most comfortable starting: by the ocean, in nature, somewhere warm and peaceful', caption: 'Where they would feel most comfortable starting.' },
  { src: '/assets/vr/betty-q3.jpg', alt: 'Betty asks how the member would like to begin: something gentle, jump right in, or a recommendation', caption: 'The pace they would like to begin at.' },
  { src: '/assets/vr/betty-thanks.jpg', alt: 'Betty thanks the member and says she will choose a session that is a great match', caption: 'Betty chooses a matching first session and explains what comes next.' },
];

export default function InHeadsetSection() {
  return (
    <CaseStudySection id="in-headset" label="In-headset experience">
      <p>
        Inside the headset, onboarding opens on a hub of three steps: set up the
        headset, match and start a session, and explore the Better Health
        library. Each step unlocks after the one before it, so there is always
        exactly one thing to do next.
      </p>
      <div className="stack-16">
        <ImageRow>
          <MediaFrame src="/assets/vr/hub-start.jpg" alt="Let’s get you ready: three setup steps, with Step 1 active" ratio={1500 / 879} border="olive" />
          <MediaFrame src="/assets/vr/hub-step2.jpg" alt="Let’s get you ready: Step 1 completed and Step 2 active" ratio={1500 / 887} border="olive" />
        </ImageRow>
        <Caption>The setup hub before and after the first step is completed.</Caption>
      </div>

      <h3>For members who did not prepare in advance</h3>
      <p>
        Not every member will open the Pre-Arrival Guide. When Betty asks
        whether they have their Wi-Fi details and the answer is no,{' '}
        <Highlight>the guide&rsquo;s steps come into the headset itself,</Highlight>{' '}
        one at a time, for the device the member already has.
      </p>
      <ImageGallery images={wifiHelp} ratio={16 / 9} border="olive" label="In-headset Wi-Fi help path" />

      <h3>Personalization with Betty</h3>
      <p>
        Once the headset is connected, Betty takes on the role of the
        coach&rsquo;s introductory conversation from the existing journey: a
        short set of questions whose answers are used to match the
        member&rsquo;s first session.
      </p>
      <ImageGallery images={personalization} ratio={16 / 9} border="olive" label="Personalization questions with Betty" />

      <h3>Handoff to the session</h3>
      <p>
        The last step hands the member over to the therapy app: Betty explains
        how to sign in with the details sent before the headset arrived, and
        the member moves on to the Better Health library.
      </p>
      <div className="stack-16">
        <ImageRow>
          <MediaFrame src="/assets/vr/signin-ready.jpg" alt="Betty: You’re ready to sign in to PsyTechVR, with instructions for the username and password" ratio={1278 / 664} border="olive" />
          <MediaFrame src="/assets/vr/library.jpg" alt="The Better Health apps library with session thumbnails" ratio={1319 / 725} border="olive" />
        </ImageRow>
        <Caption>Signing in to the therapy app, and the Better Health library.</Caption>
      </div>

      <p>
        <strong>The in-headset onboarding is design-complete and currently in development.</strong>
      </p>
      <Placeholder
        label="PLACEHOLDER — INTERACTIVE IN-HEADSET EXPERIENCE"
        note="Reserved for the interactive in-headset onboarding once it is ready to share."
      />
    </CaseStudySection>
  );
}
