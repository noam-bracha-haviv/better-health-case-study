import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import KeyList from '../components/KeyList/KeyList';
import { Highlight } from '../components/Highlight/Highlight';

const touchpoints = [
  {
    title: 'Pre-Arrival Guide',
    text: 'Wi-Fi preparation before VR, on a phone or computer the member already knows.',
  },
  {
    title: 'In-headset onboarding',
    text: 'VR-specific interaction, guided one step at a time, with a fallback for members who didn’t prepare.',
  },
  {
    title: 'Human support',
    text: 'Coaches remain available when something can’t be solved inside the flow.',
  },
];

const principles = [
  { title: 'One instruction at a time', text: 'Each screen asks for a single action.' },
  { title: 'No time pressure', text: 'Nothing that needs a decision moves on by itself.' },
  { title: 'A visible way out', text: 'Every screen offers a clear way forward or back.' },
  { title: 'One consistent guide', text: 'A single voice, Betty, carries the member through each step.' },
];

export default function OpportunitySection() {
  return (
    <CaseStudySection id="opportunity" label="Moving setup earlier">
      <p>
        The calls revealed several points of friction around Wi-Fi setup.
        Members often didn&rsquo;t know their network details, couldn&rsquo;t
        remember their password, or weren&rsquo;t sure where to find it. Some
        were also uncomfortable sharing their home Wi-Fi password with a coach
        over the phone.
      </p>
      <p>
        Rather than relying only on guidance inside VR, we decided to{' '}
        <Highlight>help members prepare before putting on the headset.</Highlight>{' '}
        The Pre-Arrival Guide lets them find and save their Wi-Fi details on a
        familiar device, so they can enter VR with the information already at
        hand.
      </p>
      <p>
        This shaped a broader principle for the new onboarding: give members
        the right guidance at the moment they need it, using the touchpoint
        that makes the task easiest to complete.
      </p>
      <KeyList items={touchpoints} />

      <h3>Design principles</h3>
      <KeyList items={principles} />
    </CaseStudySection>
  );
}
