import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BoardFigure from '../components/BoardFigure/BoardFigure';
import { Highlight } from '../components/Highlight/Highlight';

export default function ResearchSection() {
  return (
    <CaseStudySection id="research" label="Research">
      <p>
        The research combined <strong>three in-depth interviews</strong> with
        VR therapy members and <strong>28 survey responses</strong>,
        synthesized into an affinity diagram, insight statements, and a quotes
        bank.
      </p>
      <p>
        The strongest pattern sat at the very first touchpoint. Two of the three
        interviewees ran into critical problems with the device before their
        therapy had started: one received a headset stuck in an update loop,
        and another almost left the program because the setup was so
        difficult.
      </p>
      <p>
        <Highlight>
          Members need a smooth, surprise-free first experience, because a
          technical failure at the first step destroys their willingness to
          try again.
        </Highlight>
      </p>

      <h3>How might we</h3>
      <p>
        Make sure every member gets a working device and active setup support,
        not just an instruction manual?
      </p>

      <h3>Benchmark</h3>
      <p>
        I also mapped the in-headset navigation and onboarding of an existing
        VR therapy platform. Its continuous voice guidance stood out: it gave
        users a clear sense of safety and control, and helped them understand
        what was happening and where they were at every moment.
      </p>
      <BoardFigure
        src="/assets/boards/vr-xrhealth.jpg"
        full="/assets/boards/vr-xrhealth-lg.jpg"
        alt="Benchmark board mapping an existing VR therapy platform's home, library and categories"
        ratio={2400 / 1647}
        caption="Benchmark: navigation, library, and content categories of an existing VR therapy platform."
      />
    </CaseStudySection>
  );
}
