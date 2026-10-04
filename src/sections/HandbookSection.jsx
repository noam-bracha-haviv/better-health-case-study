import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import SnapGallery from '../components/SnapGallery/SnapGallery';
import Caption from '../components/Caption/Caption';
import StageLabel from '../components/StageLabel/StageLabel';

const handbookPages = [
  { src: '/assets/handbook/page-0.jpg', alt: 'Handbook cover: Your VR Journey Starts Here' },
  { src: '/assets/handbook/page-1.jpg', alt: 'Your next steps: charge, prepare, and schedule your onboarding session' },
  { src: '/assets/handbook/page-2.jpg', alt: 'How to charge the headset and replace the controller batteries' },
  { src: '/assets/handbook/page-3.jpg', alt: 'How to turn on the headset and both controllers' },
  { src: '/assets/handbook/page-4.jpg', alt: 'Headset fit and comfort: adjusting the straps' },
  { src: '/assets/handbook/page-5.jpg', alt: 'How to set up the headset: Wi-Fi, the PsyTechVR app, and signing in with a PIN' },
  { src: '/assets/handbook/page-6.jpg', alt: 'How to start a session, exit an exercise, and power off' },
  { src: '/assets/handbook/page-7.jpg', alt: 'Need help? Support hours and contact details' },
];

export default function HandbookSection() {
  return (
    <CaseStudySection id="handbook" label="Quick Start Handbook">
      <StageLabel>Earlier touchpoint</StageLabel>
      <p>
        Before the newer digital flows, I designed the printed Quick Start
        Handbook to make receiving and setting up the headset at home clearer.
        It broke the setup into clear steps: charging and batteries, the
        headset and controllers, fit and comfort, Wi-Fi, and getting into
        PsyTechVR.
      </p>
      <p>
        Each page uses large type, numbered steps, and illustrations that point
        to the exact button to press.
      </p>
      <div className="stack-16">
        <SnapGallery images={handbookPages} ratio={1} border="none" size="medium" square />
        <Caption>The Quick Start Handbook, eight pages from cover to support.</Caption>
      </div>
      <p>
        The onboarding research showed that the challenge was broader than
        clearer instructions. The hardest tasks depended on information and
        devices members didn&rsquo;t have at hand during setup. That shifted the
        question from <em>what</em> to explain to <em>when and where</em> each
        part of setup should happen.
      </p>
    </CaseStudySection>
  );
}
