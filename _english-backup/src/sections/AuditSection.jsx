import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BoardFigure from '../components/BoardFigure/BoardFigure';

export default function AuditSection() {
  return (
    <CaseStudySection id="audit" label="Audit">
      <p>
        I then audited the existing joinbetter.com page by page, marking the
        problem areas on each screen. The audit became the shared reference
        for prioritizing what the redesign needed to fix.
      </p>
      <BoardFigure
        src="/assets/boards/website-refresh-audit.jpg"
        full="/assets/boards/website-refresh-audit-lg.jpg"
        alt="Audit board of the existing joinbetter.com pages with problem areas outlined in red"
        ratio={2400 / 570}
        caption="Audit of the existing website, with problem areas outlined in red."
      />
    </CaseStudySection>
  );
}
