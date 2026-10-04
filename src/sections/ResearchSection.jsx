import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import Caption from '../components/Caption/Caption';
import { Highlight, HighlightQuote } from '../components/Highlight/Highlight';

export default function ResearchSection() {
  return (
    <CaseStudySection id="research" label="Research">
      <p>
        To understand where onboarding broke down, I analyzed recorded
        onboarding calls between Better Health coaches and members, alongside
        first-use feedback from the VR Therapy Experience Survey and internal
        operational notes. Three patterns kept coming back.
      </p>

      <h3>01 Wi-Fi setup repeatedly created friction</h3>
      <p>
        Wi-Fi came up in 6 of the 7 onboarding calls reviewed, with clear
        password-entry difficulty in 4. Some members didn&rsquo;t know their
        network name, capital letters were hard to enter on the VR keyboard,
        and in some calls the keyboard disappeared mid-entry. Some members
        needed someone else to read the password aloud: it couldn&rsquo;t be
        read with the headset on.
      </p>

      <h3>02 VR introduced unfamiliar physical interactions</h3>
      <p>
        A pointer that disappeared, a Meta button that behaves differently
        depending on how long it&rsquo;s pressed, controller batteries, and
        hard-to-find headset controls could each bring setup to a stop.
      </p>

      <h3>03 Recovery often depended on live support</h3>
      <p>
        When something failed, members usually couldn&rsquo;t continue on
        their own. Calls relied on restarts, remote resets, and step-by-step
        coaching, and in one call the headset couldn&rsquo;t be recovered and a
        replacement had to be requested.
      </p>

      <p>
        The pattern held beyond the calls: in the VR Therapy Experience Survey,
        58 of 251 respondents described their first use
        as a little or very difficult. Several members on the calls also
        described themselves as not very tech-savvy, which made{' '}
        <Highlight>clear language, one step at a time, and an obvious way forward</Highlight>{' '}
        essential.
      </p>

      <div className="stack-16">
        <HighlightQuote>
          &ldquo;You&rsquo;re not going to be able to read your password with
          the headset on.&rdquo;
        </HighlightQuote>
        <Caption>A coach, during a recorded onboarding call</Caption>
      </div>
    </CaseStudySection>
  );
}
