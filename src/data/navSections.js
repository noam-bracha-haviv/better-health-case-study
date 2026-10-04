// Shared between the sticky SectionNav and each section's own anchor id.
// Keep this the single source of truth for chapter/section order and labels.
export const NAV_CHAPTERS = [
  {
    number: '01',
    title: 'VR Onboarding',
    sections: [
      { id: 'problem', label: 'Problem' },
      { id: 'research', label: 'Research' },
      { id: 'existing-journey', label: 'Existing journey' },
      { id: 'handbook', label: 'Quick Start Handbook' },
      { id: 'opportunity', label: 'Moving setup earlier' },
      { id: 'pre-arrival', label: 'Pre-Arrival Guide' },
      { id: 'in-headset', label: 'In-headset onboarding' },
      { id: 'handoff', label: 'Handoff & status' },
    ],
  },
  {
    number: '02',
    title: 'Website & UI',
    sections: [
      { id: 'website-journey', label: 'Website journey' },
      { id: 'audit', label: 'Audit' },
      { id: 'before-after', label: 'Before / After' },
      { id: 'onboarding-ui', label: 'Onboarding UI' },
    ],
  },
];

export const NAV_SECTIONS = NAV_CHAPTERS.flatMap((chapter) => chapter.sections);
