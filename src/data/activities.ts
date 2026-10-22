import type { LogoId } from './logos';

export type Activity = {
  role: string;
  org: string;
  period?: string;
  logo?: LogoId;
  icon?: string;
  points: string[];
};

export const activities: Activity[] = [
  {
    role: 'Co-coordinator',
    org: 'IUT 12th ICT Fest Inter University Programming Contest',
    period: 'Jul 2026',
    logo: 'iutpc',
    points: [
      'Worked with Shahjalal Shohag to finalize the problemset. I think it is the most creative problemset of any Bangladeshi IUPC so far.',
      'Wrote 4 of its 12 problems.',
      'Selected the problemset for the mock contest.',
    ],
  },
  {
    role: 'Organizing Team, IUPC and ICT Olympiad',
    org: 'UIU CSE Fest 2025',
    period: 'Jan 2025',
    logo: 'uiuCseFest2025',
    points: [
      'Judged the inter-university programming contest of the fest as part of the BAPS panel.',
      'Set questions for the ICT Olympiad and coordinated its question set under the supervision of Professor Nurul Huda, then Head of the CSE Department.',
      'Handled the rules, seat plan and logistics of the olympiad, working with both students and teachers.',
    ],
  },
  {
    role: 'Moderator and Trainer',
    org: 'UIU Competitive Programming Community (UIUCPC)',
    period: 'Nov 2024 - Feb 2026',
    logo: 'uiu',
    points: [
      'Moderated the community as a faculty member and trained its competitive programmers.',
      'While I was there, the community ran BeatCode, its intra-university contest, and weekly long contests on VJudge.',
    ],
  },
  {
    role: 'Mentor',
    org: 'IUT Programming Community',
    logo: 'iutpc',
    points: [
      "Mentored several IUT teams. One of them, IUT_ChronicOverthinkers (later IUT_21stCenturyWitches), won the best all-girls' team prize at the ICPC Asia Dhaka Regional Contest 2024 and at UIU IUPC 2025.",
    ],
  },
  {
    role: 'Faculty Member',
    org: 'CSE Department, United International University',
    period: 'Nov 2024 - Feb 2026',
    logo: 'uiu',
    points: [
      'Took part in department meetings and shared suggestions.',
      'Built the routine automation system the department uses to collect and publish faculty routines.',
    ],
  },
  {
    role: 'Programming and Decoration Teams',
    org: 'IUT Computer Society',
    logo: 'iutcs',
    points: [
      'Worked in the programming and decoration teams, and helped plan and arrange different events, including IUT 11th National ICT Fest 2024.',
    ],
  },
];
