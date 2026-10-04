import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import BoardFigure from '../components/BoardFigure/BoardFigure';
import { Highlight } from '../components/Highlight/Highlight';

export default function NewSystemSection() {
  return (
    <CaseStudySection id="new-system" label="New onboarding system">
      <p>
        With preparation moved earlier, I mapped a new onboarding system inside
        the headset. Instead of relying on a coach call, it guides the member
        from the first moment the app opens to the start of a real session.
      </p>
      <p>
        The flow moves from an introduction video and a controller
        introduction, through Wi-Fi setup with Betty, the Better Health
        library, and a one-time session matching with Betty, into the therapy
        app&rsquo;s own library.{' '}
        <Highlight>Betty, a single named guide, speaks in the first person across every step,</Highlight>{' '}
        building on the benchmark&rsquo;s finding that continuous voice guidance
        makes users feel safe and oriented.
      </p>
      <BoardFigure
        src="/assets/boards/vr-overview.jpg"
        full="/assets/boards/vr-overview-lg.jpg"
        alt="VR onboarding overview flow from the headset library through Betty's Wi-Fi setup and session matching to the therapy library"
        ratio={2400 / 706}
        caption="New onboarding system overview: from the headset library to the therapy app's library."
      />
      <h3>Detailed flow</h3>
      <p>
        The detailed wireframe breaks the system into three setup steps, with
        separate paths for members who prepared with the Pre-Arrival Guide and
        members who did not.
      </p>
      <BoardFigure
        src="/assets/boards/vr-wireframe.jpg"
        full="/assets/boards/vr-wireframe-lg.jpg"
        alt="Detailed VR onboarding wireframe with the setup hub, Wi-Fi help path, Betty questions, and handoff"
        ratio={2400 / 1104}
        caption="Detailed in-headset flow: setup hub, Wi-Fi help path, personalization, and handoff."
      />
    </CaseStudySection>
  );
}
