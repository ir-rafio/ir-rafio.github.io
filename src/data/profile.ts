// Home section: about text and the timeline ("chronicle").
// Timeline entries use month + year only. Newest first.

export const about = {
  greeting: "Hello, I'm Irfanur Rahman Rafio.",
  // Each string is one paragraph. Wrap words in ** ** to make them bold.
  paragraphs: [
    'I recently graduated in **Computer Science and Engineering** from the **Islamic University of Technology** (IUT). Since then I have worked as a **Software Engineer** and as a **Lecturer**. I have competed in programming contests for years, and now I regularly set problems for national contests in Bangladesh. I love mathematics, and am passionate about teaching.',
    'My research interests are **Computer Vision**, **Adversarial Attacks**, **Continual Learning**, **Natural Language Processing**, **Model Steering** and **Deep Learning** in general. I have also started exploring **Complexity Theory**.',
    'There are a lot of things I like to do when the stakes are low. My favorite way to spend my free time is telling stories, making people laugh or acting cartoonishly silly.',
  ],
};

export type TimelineEntry = { date: string; text: string; href?: string };

// Hand-written timeline events. Contests from contests.ts and published
// research from research.ts are added automatically (see src/lib/timeline.ts).
// Dates are 'Mon YYYY', or just 'YYYY' when the month is unknown.
export const timeline: TimelineEntry[] = [
  {
    date: 'Aug 2026',
    text: 'My article "Learn to Be Bad at Stuff" got published in Beacon 2026, the magazine of the IUT 12th ICT Fest.',
    href: '/blog/learn-to-be-bad-at-stuff/',
  },
  {
    date: 'Feb 2026',
    text: 'Left United International University after 16 months as a Lecturer.',
  },
  {
    date: 'Jul 2025',
    text: 'Started working on adversarial vulnerabilities of no-reference image quality models.',
    href: '/research/',
  },
  {
    date: 'Jul 2025',
    text: 'Built the routine automation system for the CSE Department of UIU.',
  },
  {
    date: 'Apr 2025',
    text: 'Joined the Bangladesh Competitive Programming Society (BCS).',
  },
  {
    date: 'Jan 2025',
    text: 'Started the IUPC slot allocation system, first used at UIU IUPC 2025.',
  },
  {
    date: 'Jan 2025',
    text: "IUT_21stCenturyWitches, one of the teams I mentored, won the best all-girls' team prize at UIU IUPC 2025.",
  },
  {
    date: 'Jan 2025',
    text: 'Coordinated the questions of the ICT Olympiad at UIU CSE Fest 2025.',
  },
  {
    date: 'Dec 2024',
    text: 'Joined the Bangladesh Association of Problem Setters (BAPS).',
  },
  {
    date: 'Dec 2024',
    text: "IUT_ChronicOverthinkers, one of the teams I mentored, won the best all-girls' team prize at the ICPC Asia Dhaka Regional Contest 2024.",
  },
  {
    date: 'Nov 2024',
    text: 'Joined United International University as a Lecturer.',
  },
  {
    date: 'Sep 2024',
    text: 'Started teaching lab courses at IUT as a part-time Lecturer.',
  },
  {
    date: 'Sep 2024',
    text: 'Became the official competitive programming trainer at IUT.',
  },
  {
    date: 'Jul 2024',
    text: 'Joined Therap (BD) Ltd. as an Associate Software Engineer through campus recruitment.',
  },
  {
    date: 'Jun 2024',
    text: 'Graduated from IUT, 9th in the CSE class with a CGPA of 3.88.',
  },
  {
    date: 'Feb 2024',
    text: 'Placed 28th of 98 teams in DL Enigma 1.0, the road object detection datathon of SUST CSE Carnival 2024.',
  },
  {
    date: 'Mar 2023',
    text: 'Scored the highest individual points in CodeRush 1.0, the capture the flag contest at IUT, where my team placed 2nd.',
  },
  {
    date: 'Jun 2023',
    text: 'Started my internship at BinduLogic as part of the industrial training course.',
  },
  {
    date: 'Jan 2023',
    text: 'Started teaching weekly competitive programming classes at IUT.',
  },
  {
    date: 'Jan 2020',
    text: 'Started my BSc in CSE at IUT on the OIC scholarship.',
  },
];
