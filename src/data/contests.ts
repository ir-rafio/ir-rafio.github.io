import type { LogoId } from './logos';

export const codeforces = {
  handle: 'Rafio',
  url: 'https://codeforces.com/profile/Rafio',
  rank: 'Expert',
  maxRating: 1892,
  contests: 146,
  solved: '1000+',
};

export const biscuit = {
  url: 'https://ir-rafio.github.io/Biscuit-Rating/u/rafio.html',
  rating: 2891,
};

export type Participation = {
  name: string;
  date: string;
  venue?: string;
  rank: string;
  field?: string;
  team?: string;
  teammates?: string;
  solved?: string;
  timeline?: string;
  note?: string;
  highlights: string[];
  logo?: LogoId;
  featured?: boolean;
  links: { label: string; href: string }[];
};

export const participations: Participation[] = [
  {
    name: 'ICPC Asia West Continent Final Contest 2024',
    date: 'Mar 2025',
    venue: 'Multi-site, including Dhaka',
    rank: 'Honorable Mention',
    team: 'IUT_CocolaChampionBiscuit',
    teammates: 'Abdullah Abrar, Abid Hasan',
    highlights: ['Qualified through the Dhaka Regional'],
    logo: 'icpc',
    featured: true,
    links: [],
  },
  {
    name: 'ICPC Asia Dhaka Regional Contest 2024',
    date: 'Dec 2024',
    venue: 'Daffodil International University',
    rank: '5th',
    field: '309 teams',
    team: 'IUT_CocolaChampionBiscuit',
    teammates: 'Abdullah Abrar, Abid Hasan',
    solved: '6 of 12',
    highlights: ['First to solve Problem C'],
    logo: 'icpc',
    featured: true,
    links: [
      {
        label: 'Standings',
        href: 'https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings',
      },
      {
        label: 'IUT news',
        href: 'https://cse.iutoic-dhaka.edu/news/iut-teams-shine-at-icpc-asia-regional-dhaka-site-2024',
      },
    ],
  },
  {
    name: 'IUPC, BUET CSE Fest 2024',
    date: 'Nov 2024',
    venue: 'Bangladesh University of Engineering and Technology',
    rank: '20th',
    field: '113 teams',
    team: 'IUT_Arise',
    teammates: 'Nayeem Hossain, Saom Bin Khaled',
    solved: '5',
    note: 'We were at the top of the standings early in the contest. My teammates had an exam that day, so we had to leave about two hours before the contest ended. It is still one of my favorite contests.',
    highlights: ['First to solve Problem F'],
    featured: true,
    links: [
      {
        label: 'Standings',
        href: 'https://toph.co/c/inter-university-buet-cse-fest-2024/standings',
      },
    ],
  },
  {
    name: 'Rayan Programming Contest 2024, Selection Round',
    date: 'Nov 2024',
    rank: 'World Finals Qualifier',
    timeline:
      'Qualified for the Rayan 2025 World Finals through the Rayan Programming Contest 2024',
    highlights: ['Reached my maximum Codeforces rating of 1892'],
    logo: 'rayan',
    links: [
      {
        label: 'Standings',
        href: 'https://codeforces.com/contest/2034/standings',
      },
    ],
  },
  {
    name: 'SRBD Code Contest 2024, Round 1',
    date: 'Sep 2024',
    rank: '184th',
    field: '900+ contestants',
    highlights: [],
    links: [],
  },
  {
    name: 'IUT 11th National ICT Fest Programming Contest',
    date: 'Apr 2024',
    venue: 'Islamic University of Technology',
    rank: '35th',
    field: '108 teams',
    team: 'IUT_Focus_Blast',
    teammates: 'Mir Sayad, Mushfiq Talha',
    highlights: [],
    links: [
      {
        label: 'Standings',
        href: 'https://toph.co/c/iut-11th-national-ict-fest-2024/standings',
      },
    ],
  },
  {
    name: 'ICPC Asia West Continent Final Contest 2023',
    date: 'Mar 2024',
    venue: 'Multi-site, including BUBT, Dhaka',
    rank: 'Honorable Mention',
    team: 'IUT_Shondhatara',
    teammates: 'Imtiaz Tanweer Rahim, Nur Nasrum',
    highlights: ['Qualified through the Dhaka Regional'],
    logo: 'icpc',
    featured: true,
    links: [],
  },
  {
    name: 'National Collegiate Programming Contest 2023',
    date: 'Mar 2024',
    venue: 'Jahangirnagar University',
    rank: '35th',
    field: '196 teams',
    team: 'IUT_Dhrubotara',
    teammates: 'Imtiaz Tanweer Rahim, Mushfiq Talha',
    solved: '6',
    highlights: [],
    links: [
      {
        label: 'Standings',
        href: 'https://bapsoj.org/contests/ncpc-onsite-2023-hosted-by-ju/standings',
      },
    ],
  },
  {
    name: 'CUET IUPC CodeStorm 1.0',
    date: 'Jan 2024',
    venue: 'Chittagong University of Engineering & Technology',
    rank: '30th',
    field: '99 teams',
    team: 'IUT_Durjoy',
    teammates: 'Md. Sakib Hossain, Saom Bin Khaled',
    solved: '4',
    highlights: [],
    links: [
      {
        label: 'Standings',
        href: 'https://toph.co/c/cuet-inter-university-codestorm-1-0/standings',
      },
    ],
  },
  {
    name: 'ICPC Asia Dhaka Regional Contest 2023',
    date: 'Nov 2023',
    venue: 'Bangladesh University of Business & Technology',
    rank: '29th',
    field: '223 teams',
    team: 'IUT_Shondhatara',
    teammates: 'Imtiaz Tanweer Rahim, Nur Nasrum',
    solved: '4',
    highlights: ['First to solve Problem D'],
    logo: 'icpc',
    featured: true,
    links: [
      {
        label: 'Standings',
        href: 'https://bapsoj.org/contests/icpc-dhaka-regional-site-2023/standings',
      },
    ],
  },
  {
    name: 'ICPC Asia Dhaka Regional Online Preliminary 2023',
    date: 'Oct 2023',
    rank: '33rd',
    field: '2460 teams',
    team: 'IUT_Shondhatara',
    teammates: 'Imtiaz Tanweer Rahim, Nur Nasrum',
    highlights: [],
    logo: 'icpc',
    links: [],
  },
  {
    name: 'SRBD Code Contest 2023, Round 2',
    date: 'Oct 2023',
    rank: '141st',
    field: '300 contestants',
    highlights: [],
    links: [],
  },
  {
    name: 'SRBD Code Contest 2023, Round 1',
    date: 'Sep 2023',
    rank: '158th',
    field: '600+ contestants',
    highlights: [],
    links: [],
  },
  {
    name: 'ICPC Asia Dhaka Regional Contest 2022',
    date: 'Mar 2023',
    venue: 'Green University of Bangladesh',
    rank: '31st',
    field: '162 teams',
    team: 'IUT_GroupOfPandas',
    teammates: 'Sumit Alam Khan, Tasfia Tahsin',
    solved: '3',
    highlights: [],
    logo: 'icpc',
    links: [],
  },
  {
    name: 'ICPC Asia Dhaka Regional Online Preliminary 2022',
    date: 'Feb 2023',
    rank: '86th',
    field: '1635 teams',
    team: 'IUT_GroupOfPandas',
    teammates: 'Sumit Alam Khan, Tasfia Tahsin',
    solved: '4',
    highlights: [],
    logo: 'icpc',
    links: [],
  },
  {
    name: 'ICPC Asia Dhaka Regional Online Preliminary 2021',
    date: 'Sep 2022',
    rank: '99th',
    field: '1744 teams',
    team: 'IUT_Bottlebrush',
    solved: '5',
    highlights: [],
    logo: 'icpc',
    links: [],
  },
];

export type SetterRole =
  | 'Coordinator'
  | 'Co-coordinator'
  | 'Setter'
  | 'Tester';

export type SetProblem = {
  id: string;
  title: string;
  topics: string[];
  note?: string;
};

export type JudgedContest = {
  name: string;
  date: string;
  host?: string;
  roles: SetterRole[];
  logo?: LogoId;
  authored: SetProblem[];
  tested: string[];
  note?: string;
  links: { label: string; href: string }[];
};

export const judged: JudgedContest[] = [
  {
    name: 'ICPC Asia Dhaka Regional Online Preliminary 2026',
    date: 'Oct 2026',
    host: 'International University of Business Agriculture and Technology',
    roles: ['Setter', 'Tester'],
    logo: 'icpc',
    note: 'Worked on 4 of the 8 problems as an author or tester. Later recorded a video tutorial of my problem.',
    authored: [
      {
        id: 'E',
        title: 'Perfect Couple',
        topics: ['Number Theory', 'Range Query', 'Brute Force'],
        note: 'Co-authored with Abdullah Abrar',
      },
    ],
    tested: ['A. Whirlpool', 'D. Stuck in the Middle', 'F. Yet Another Stone Problem'],
    links: [
      {
        label: 'Problems',
        href: 'https://github.com/baps-problemset-archive/contests-archive/blob/main/icpc-2026-preli/statements.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://github.com/baps-problemset-archive/contests-archive/blob/main/icpc-2026-preli/editorials.pdf',
      },
      { label: 'Replay', href: 'https://codeforces.com/gym/106810' },
      { label: 'Video tutorial of E', href: 'https://youtu.be/UtgH0MY6I34' },
    ],
  },
  {
    name: 'IUT 12th ICT Fest Inter University Programming Contest 2026',
    date: 'Jul 2026',
    host: 'Islamic University of Technology',
    roles: ['Co-coordinator', 'Setter'],
    logo: 'iut',
    note: 'Wrote 4 of the 12 problems and worked with Shahjalal Shohag to finalize the problemset.',
    authored: [
      {
        id: 'A',
        title: 'Ask With Caution',
        topics: ['Number Theory', 'Interactive'],
      },
      {
        id: 'D',
        title: 'Outsmarting',
        topics: ['Strings', 'Ad-hoc', 'Game Theory'],
      },
      { id: 'F', title: 'Fraction Again!', topics: ['Math', 'Constructive'] },
      {
        id: 'J',
        title: 'Mode Zero',
        topics: ['Ad-hoc'],
      },
    ],
    tested: [],
    links: [
      {
        label: 'Problems',
        href: 'https://codeforces.com/gym/106631/attachments/download/38723/Statements%20-%20IUT%20IUPC%202026.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://codeforces.com/gym/106631/attachments/download/38734/Tutorial%20-%20IUT%20IUPC%202026.pdf',
      },
    ],
  },
  {
    name: 'SUST CSE Carnival 2026 Inter University Programming Contest',
    date: 'Jul 2026',
    host: 'Shahjalal University of Science and Technology',
    roles: ['Tester'],
    logo: 'sust',
    authored: [],
    tested: [
      'E. A Distinct Problem',
      'L. Appending LIS',
      'F. Shortest Paths',
      'K. Prime Coloring',
    ],
    links: [
      {
        label: 'Problems',
        href: 'https://codeforces.com/gym/106619/attachments/download/38438/Statements%20-%20SUST%20IUPC%202026.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://codeforces.com/gym/106619/attachments/download/38439/Tutorial%20--%20SUST%20IUPC%202026.pdf',
      },
    ],
  },
  {
    name: 'DUET Inter University Programming Contest 2026',
    date: 'Jun 2026',
    host: 'Dhaka University of Engineering & Technology',
    roles: ['Setter', 'Tester'],
    logo: 'duet',
    authored: [{ id: 'G', title: 'An Odd Problem', topics: ['Greedy'] }],
    tested: ['D. Skill Issue', 'I. The Paintress'],
    links: [
      {
        label: 'Problems',
        href: 'https://codeforces.com/gym/106607/attachments/download/38285/Statements%20of%20DUET%20IUPC%202026.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://codeforces.com/gym/106607/attachments/download/38286/Tutorial%20-%20DUET%20IUPC%202026.pdf',
      },
    ],
  },
  {
    name: 'NSUCEC Cybernauts 2026 Inter University Programming Contest',
    date: 'Jun 2026',
    host: 'North South University',
    roles: ['Setter', 'Tester'],
    logo: 'nsu',
    authored: [
      {
        id: 'B',
        title: 'Nonmetal Alchemist',
        topics: ['Combinatorics', 'Binary Search'],
      },
      {
        id: 'F',
        title: "Fool's Gold",
        topics: ['Number Theory', 'Combinatorics'],
      },
      {
        id: 'I',
        title: 'The Man, The Math, The Legend!',
        topics: ['Math', 'Implementation'],
      },
    ],
    tested: [
      'H. Capital Logistics',
      'J. Resonance Frog',
      'C. Self Citation',
      'D. Floatovoltaics',
      'K. Diagonal Shortcuts',
    ],
    links: [
      {
        label: 'Problems',
        href: 'https://codeforces.com/gym/106592/attachments/download/38162/statements.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://codeforces.com/gym/106592/attachments/download/38598/editorials.pdf',
      },
    ],
  },
  {
    name: 'Intra-IUT Junior Programming Contest (IJPC) 2026',
    date: 'May 2026',
    host: 'Islamic University of Technology',
    roles: ['Coordinator', 'Setter'],
    logo: 'iutpc',
    note: 'Also set up the GitHub Actions workflow that builds the editorial.',
    authored: [{ id: 'I', title: 'Iris Out', topics: ['Ad-hoc', 'Graphs'] }],
    tested: [],
    links: [
      { label: 'Problems', href: 'https://github.com/rbwkai/IJPC2026/blob/main/Statements.pdf' },
      { label: 'Editorial', href: 'https://github.com/rbwkai/IJPC2026/blob/main/Editorial.md' },
    ],
  },
  {
    name: 'NDUB Inter University Programming Contest 2026',
    date: 'May 2026',
    host: 'Notre Dame University Bangladesh',
    roles: ['Setter', 'Tester'],
    authored: [
      {
        id: 'A',
        title: '"86"',
        topics: ['Probability', 'Bitmasks', 'Dynamic Programming'],
        note: 'Co-authored with Mohidul Haque Mridul',
      },
    ],
    tested: ['H. Mango Mania'],
    links: [
      {
        label: 'Problems',
        href: 'https://codeforces.com/gym/106522/attachments/download/37642/main.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://codeforces.com/gym/106522/attachments/download/37676/Editorials.pdf',
      },
    ],
  },
  {
    name: 'ICPC Asia Dhaka Regional Contest 2025',
    date: 'Dec 2025',
    host: 'Bangladesh University of Business & Technology',
    roles: ['Setter', 'Tester'],
    logo: 'icpcDhaka2025',
    note: 'Worked on 8 of the 10 problems as an author or tester.',
    authored: [
      {
        id: 'A',
        title: 'Mission Hexa',
        topics: ['Geometry', 'Number Theory', 'Combinatorics'],
      },
      {
        id: 'E',
        title: 'Love Marriage',
        topics: ['Probability', 'Range Query', 'Greedy'],
      },
    ],
    tested: [
      'B. Boulevard of Broken Cars',
      'F. Morning Walk',
      'G. Nonogram',
      'H. Optimal Balancing Strategy',
      'I. Two Strings Attached',
      'J. C-Style String Length',
    ],
    links: [
      {
        label: 'Problems',
        href: 'https://codeforces.com/gym/106270/attachments/download/34980/statements%20(1).pdf',
      },
      {
        label: 'Editorial',
        href: 'https://codeforces.com/gym/106270/attachments/download/35016/editorials.pdf',
      },
    ],
  },
  {
    name: 'CUET Inter University Programming Contest 2025',
    date: 'Dec 2025',
    host: 'Chittagong University of Engineering & Technology',
    roles: ['Setter', 'Tester'],
    logo: 'cuet',
    authored: [
      {
        id: 'A',
        title: 'Kill Two Birds with One Stone',
        topics: ['Ad-hoc', 'Graphs'],
      },
    ],
    tested: ['D. The AND, The OR...', 'H. Prime Triangles'],
    links: [
      {
        label: 'Problems',
        href: 'https://drive.google.com/file/d/1SubH-LvqlxU6NvlhmIzYl04HNDC7975K/view',
      },
      {
        label: 'Editorial',
        href: 'https://drive.google.com/file/d/1U-MDpLDcbfNOWr_6M_ozJh-DpPO9qQwy/view',
      },
    ],
  },
  {
    name: 'Codeforces Round 1067 (Div. 2)',
    date: 'Nov 2025',
    roles: ['Tester'],
    logo: 'codeforces',
    authored: [],
    tested: [],
    links: [
      {
        label: 'Announcement',
        href: 'https://codeforces.com/blog/entry/148752',
      },
      { label: 'Contest', href: 'https://codeforces.com/contest/2158' },
    ],
  },
  {
    name: 'ICPC Asia Dhaka Regional Online Preliminary 2025',
    date: 'Nov 2025',
    host: 'Bangladesh University of Business & Technology',
    roles: ['Setter', 'Tester'],
    logo: 'icpcDhaka2025',
    note: 'Worked on all 8 problems as an author or tester. Also built the plagiarism checker, which flagged 251 submissions from 124 teams across 51 institutions.',
    authored: [
      {
        id: 'B',
        title: 'Your Next Line Is, "What A Cool Problem!"',
        topics: ['Ad-hoc'],
      },
      { id: 'G', title: 'The Matrix', topics: ['Bitmasks', 'Constructive'] },
    ],
    tested: [
      'A. Delete, Deduct, and Destroy',
      'C. Least Compatible Ancestor',
      'D. Magical Flower Garden',
      'E. The Perfect View',
      'F. Over Counting',
      'H. Chemical Reaction',
    ],
    links: [
      {
        label: 'Problems',
        href: 'https://github.com/baps-problemset-archive/contests-archive/blob/main/icpc-2025-preli/statements.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://github.com/baps-problemset-archive/contests-archive/blob/main/icpc-2025-preli/editorials.pdf',
      },
    ],
  },
  {
    name: 'IUT Intra University Programming Contest 2025',
    date: 'Aug 2025',
    host: 'Islamic University of Technology',
    roles: ['Coordinator', 'Setter'],
    logo: 'iutpc',
    authored: [
      { id: 'A', title: 'Pacman vs. Vampire', topics: ['Graphs'] },
      { id: 'H', title: "Pythagoras' Playhouse", topics: ['Geometry', 'Math'] },
      { id: 'J', title: 'Bit Lobon', topics: ['Bitmasks'] },
    ],
    tested: [],
    links: [
      {
        label: 'Problems',
        href: 'https://github.com/ir-rafio/AHIUPC-2025-Problemset/blob/main/Statements.pdf',
      },
      { label: 'Editorial', href: 'https://github.com/ir-rafio/AHIUPC-2025-Problemset/blob/main/Editorial.md' },
    ],
  },
  {
    name: 'Intra-IUT Junior Programming Contest (IJPC) 2025',
    date: 'May 2025',
    host: 'Islamic University of Technology',
    roles: ['Coordinator', 'Setter'],
    logo: 'iutpc',
    authored: [
      { id: 'E', title: 'Eid Salami', topics: ['Greedy', 'Binary Search'] },
      {
        id: 'H',
        title: 'Hex Game',
        topics: ['Geometry', 'Interactive', 'Game Theory'],
      },
    ],
    tested: [],
    links: [
      {
        label: 'Problems',
        href: 'https://github.com/ir-rafio/IJPC-2025-Problemset/blob/main/Statements.pdf',
      },
      { label: 'Editorial', href: 'https://github.com/ir-rafio/IJPC-2025-Problemset/blob/main/Editorial.md' },
    ],
  },
  {
    name: 'DUET Inter University Programming Contest 2025',
    date: 'May 2025',
    host: 'Dhaka University of Engineering & Technology',
    roles: ['Setter', 'Tester'],
    logo: 'duet',
    authored: [{ id: 'H', title: 'Litmus Test', topics: ['Ad-hoc'] }],
    tested: ['D. An Interesting Problem'],
    links: [
      {
        label: 'Problems',
        href: 'https://drive.google.com/file/d/1QM2g58oDBPTNEs3gt5VyanvFtzl9Q3Nl/view',
      },
      {
        label: 'Editorial',
        href: 'https://drive.google.com/file/d/1rkCqueNB0BS6ayEseO12UWirwW0eLmae/view',
      },
    ],
  },
  {
    name: 'UIU Inter University Programming Contest 2025',
    date: 'Jan 2025',
    host: 'United International University',
    roles: ['Setter', 'Tester'],
    logo: 'uiuCseFest2025',
    authored: [
      { id: 'B', title: 'Bijgonit', topics: ['Math'] },
      { id: 'J', title: 'T5', topics: ['Game Theory'] },
    ],
    tested: [
      'A. A Boring Number Game',
      'D. Daripalla',
      'E. Escape Plan II',
      'H. Array Apocalypse',
      "I. Let's Learn Multiplication Table",
    ],
    links: [
      {
        label: 'Problems',
        href: 'https://github.com/baps-problemset-archive/contests-archive/blob/main/uiu-iupc-2025/statements.pdf',
      },
      {
        label: 'Editorial',
        href: 'https://github.com/baps-problemset-archive/contests-archive/blob/main/uiu-iupc-2025/editorials.pdf',
      },
    ],
  },
  {
    name: 'KUET BitFest 2025 Inter University Programming Contest',
    date: 'Jan 2025',
    host: 'Khulna University of Engineering & Technology',
    roles: ['Setter'],
    logo: 'bitfest2025',
    authored: [
      {
        id: 'A',
        title: 'Perpendicular Parking',
        topics: ['Ad-hoc', 'Constructive'],
      },
    ],
    tested: [],
    links: [
      {
        label: 'Problems',
        href: 'https://drive.google.com/file/d/1grOQsUBx4PWC9-tIAFXF62PmEvckOji0/view',
      },
      {
        label: 'Editorial',
        href: 'https://drive.google.com/file/d/1gr7ivLYJm9Jaloapw2VxaY6xzPeJVCie/view',
      },
    ],
  },
  {
    name: 'Intra-IUT Junior Programming Contest (IJPC) 2024',
    date: 'Mar 2024',
    host: 'Islamic University of Technology',
    roles: ['Coordinator', 'Setter'],
    logo: 'iutpc',
    authored: [
      { id: 'A', title: 'Colorful Socks', topics: ['Greedy'] },
      { id: 'B', title: 'Darhi Palla', topics: ['Math'] },
      { id: 'E', title: "Monks' Game of Cards", topics: ['Math', 'Graphs'] },
      {
        id: 'F',
        title: 'Moniter Goja, Gojar Monit',
        topics: ['Ad-hoc', 'Math'],
      },
    ],
    tested: [],
    links: [
      {
        label: 'Problems',
        href: 'https://github.com/ir-rafio/IJPC-2024-Problemset/blob/main/Statements.pdf',
      },
      { label: 'Contest', href: 'https://toph.co/c/intra-iut-junior-2024' },
      { label: 'Editorial', href: 'https://github.com/ir-rafio/IJPC-2024-Problemset/blob/main/Editorial.md' },
    ],
  },
];

export function problemTopics(): { topic: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const c of judged)
    for (const p of c.authored)
      for (const t of p.topics) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()]
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count);
}

export const authoredCount = judged.reduce((n, c) => n + c.authored.length, 0);

export const homeJudged = [
  'ICPC Asia Dhaka Regional Online Preliminary 2026',
  'ICPC Asia Dhaka Regional Contest 2025',
  'ICPC Asia Dhaka Regional Online Preliminary 2025',
  'IUT 12th ICT Fest Inter University Programming Contest 2026',
  'Codeforces Round 1067 (Div. 2)',
  'NSUCEC Cybernauts 2026 Inter University Programming Contest',
  'KUET BitFest 2025 Inter University Programming Contest',
];
