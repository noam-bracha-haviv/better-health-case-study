import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import PathGallery from '../components/PathGallery/PathGallery';

const paths = [
  {
    key: 'website',
    label: 'Website Path',
    summary:
      'Members arriving from the marketing website start from scratch: they verify their phone, choose what they are shopping for, add their insurance, and review recommended products.',
    screens: [
      { src: '/assets/screens/web/sign-up.jpg', alt: 'Sign up: Let’s get your order started, with phone verification', caption: 'Sign up starts with a single field: a mobile number.' },
      { src: '/assets/screens/web/122.jpg', alt: 'What are you shopping for today? with VR Headset selected', caption: 'Members choose what they are shopping for, including the VR headset program.' },
      { src: '/assets/screens/web/219.jpg', alt: 'How would you describe your experience with these products?', caption: 'One question per screen, with plain-language answers.' },
      { src: '/assets/screens/web/06.1.jpg', alt: 'Enter your primary insurance information, with a list of plans', caption: 'Insurance comes in with an explanation of why it is needed.' },
      { src: '/assets/screens/web/product-recommendations.jpg', alt: 'Review: recommended products by category, each with Discover alternatives', caption: 'Recommended products to review, each with alternatives to explore.' },
      { src: '/assets/screens/web/dashboard.jpg', alt: 'Member dashboard with messages, scheduling a call, and latest orders', caption: 'The member dashboard: messages, a call to schedule, and the latest orders.' },
    ],
  },
  {
    key: 'referral',
    label: 'Provider Referral Path',
    summary:
      'Members referred by a provider sign in to an order that already exists: they review and confirm the prescribed products, then complete the details needed to ship them.',
    screens: [
      { src: '/assets/screens/referral/sign-in.jpg', alt: 'Welcome back to better health: sign in by mobile or email', caption: 'Referred members sign in rather than sign up.' },
      { src: '/assets/screens/referral/prescription.jpg', alt: 'Let’s review your order: prescribed products by category with Confirm my 4 products', caption: 'The prescribed order is waiting for the member to review and confirm.' },
      { src: '/assets/screens/referral/212.jpg', alt: 'Who can we contact in case of an emergency?', caption: 'An emergency contact, with the caregiver as the first option.' },
      { src: '/assets/screens/referral/209.jpg', alt: 'Add a payment method, with an option to do it later', caption: 'A card on file for any patient responsibility, with the option to add it later.' },
      { src: '/assets/screens/referral/prescription-1.jpg', alt: 'Your order request has been submitted, with a reference number', caption: 'Confirmation with a reference number, and edits still possible.' },
      { src: '/assets/screens/referral/dashboard.jpg', alt: 'Member dashboard with things you need to do, notifications, and latest orders', caption: 'The dashboard opens on the remaining things to do.' },
    ],
  },
];

export default function OnboardingUISection() {
  return (
    <CaseStudySection id="onboarding-ui" label="Onboarding UI">
      <p>
        Alongside the website redesign, I designed the UI for two onboarding
        paths: members entering through the marketing website and members
        referred by a provider. Both flows use the shared Better Health Design
        System while adapting the experience to different entry points.
      </p>
      <PathGallery paths={paths} />
    </CaseStudySection>
  );
}
