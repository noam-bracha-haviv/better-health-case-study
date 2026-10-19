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
        Seeing this pattern across the calls, I proposed moving Wi-Fi
        preparation earlier in the journey: rather than relying only on
        guidance inside VR,{' '}
        <Highlight>help members prepare before putting on the headset.</Highlight>{' '}
        I brought this direction to the Head of Product, we reviewed it
        together, and it was approved.
      </p>
      <p>
        From there, I defined and designed how the solution would work,
        including the flow and the fallback for members who don&rsquo;t yet
        have their Wi-Fi details ready. The result was the Pre-Arrival Guide,
        which lets members find and save those details on a familiar device
        before entering VR. I kept iterating on it with feedback from the Head
        of Product.
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
