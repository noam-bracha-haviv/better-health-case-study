import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BeforeAfter from '../components/BeforeAfter/BeforeAfter';
import Caption from '../components/Caption/Caption';

export default function BeforeAfterSection() {
  return (
    <CaseStudySection id="before-after" label="Before / After">
      <p>
        Pelos Studio, an external design partner, created the visual direction
        and Design System for the redesign and designed significant parts of
        the new website. Once the Design System existed, I used it to design
        additional Better Health pages myself, including the Peer Support
        page.
      </p>
      <p>
        The redesigned page leads with the offer and a clear call to action,
        turns the eligibility list into a scannable checklist, and brings the
        FAQ and contact options into the same structure as the rest of the
        site.
      </p>
      <div className="stack-16">
        <BeforeAfter
          before={{
            src: '/assets/pages/peer-before.jpg',
            alt: 'The previous Peer Support page on joinbetter.com',
          }}
          after={{
            src: '/assets/pages/peer-after.jpg',
            alt: 'The redesigned Peer Support page',
          }}
        />
        <Caption>
          Page design: Noam Bracha Haviv · Design System &amp; visual direction:
          Pelos Studio
        </Caption>
      </div>
    </CaseStudySection>
  );
}
