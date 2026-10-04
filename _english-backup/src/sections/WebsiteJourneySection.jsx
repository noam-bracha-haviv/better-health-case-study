import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BoardFigure from '../components/BoardFigure/BoardFigure';
import { Highlight } from '../components/Highlight/Highlight';

export default function WebsiteJourneySection() {
  return (
    <CaseStudySection id="website-journey" label="Website journey">
      <p>
        Alongside the VR work, I supported the redesign of the Better Health
        website. My role was UX research: mapping the existing journey,
        running competitive analysis, identifying UX problems and
        opportunities, and working with the Better Health team on what needed
        to improve.
      </p>
      <p>
        I started by mapping how members move from discovery to checkout,
        across four entry points: category search, direct brand search, a
        referral from a doctor, and product search. In the existing flow,{' '}
        <Highlight>insurance eligibility was only checked after the cart,</Highlight>{' '}
        and members without insurance reached an error at the end of the path.
      </p>
      <BoardFigure
        src="/assets/boards/discovery-to-checkout.jpg"
        full="/assets/boards/discovery-to-checkout-lg.jpg"
        alt="Website flow from four entry points through category, search, product, cart and insurance eligibility to registration and onboarding"
        ratio={2400 / 813}
        caption="Existing website journey, from entry points to checkout and onboarding."
      />
    </CaseStudySection>
  );
}
