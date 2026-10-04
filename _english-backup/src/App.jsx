import TopBar from './components/TopBar/TopBar';
import Hero from './components/Hero/Hero';
import IntroBlurb from './components/IntroBlurb/IntroBlurb';
import SectionNav from './components/SectionNav/SectionNav';
import ChapterIntro from './components/ChapterIntro/ChapterIntro';
import ProblemSection from './sections/ProblemSection';
import ResearchSection from './sections/ResearchSection';
import ExistingJourneySection from './sections/ExistingJourneySection';
import PreArrivalSection from './sections/PreArrivalSection';
import HandbookSection from './sections/HandbookSection';
import NewSystemSection from './sections/NewSystemSection';
import InHeadsetSection from './sections/InHeadsetSection';
import WebsiteJourneySection from './sections/WebsiteJourneySection';
import AuditSection from './sections/AuditSection';
import BeforeAfterSection from './sections/BeforeAfterSection';
import OnboardingUISection from './sections/OnboardingUISection';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.page}>
      <TopBar />
      <Hero />
      <IntroBlurb />
      <div className={styles.layout}>
        <SectionNav />
        <main className={styles.main}>
          <ChapterIntro number="01" title="The at-home VR onboarding journey">
            From a headset arriving at a member&rsquo;s door to their first VR
            wellness session, designed for older adults first.
          </ChapterIntro>
          <ProblemSection />
          <ResearchSection />
          <ExistingJourneySection />
          <PreArrivalSection />
          <HandbookSection />
          <NewSystemSection />
          <InHeadsetSection />

          <ChapterIntro number="02" title="UX research behind the website redesign and onboarding UI">
            Mapping and auditing the existing website journey, then designing
            new pages and the onboarding UI on the shared Design System.
          </ChapterIntro>
          <WebsiteJourneySection />
          <AuditSection />
          <BeforeAfterSection />
          <OnboardingUISection />
        </main>
      </div>
    </div>
  );
}
