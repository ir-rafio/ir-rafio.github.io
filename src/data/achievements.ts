import type { LogoId } from './logos';

export type Achievement = {
  title: string;
  text: string;
  logo?: LogoId;
  icon?: string;
  links: { label: string; href: string }[];
};

// The first entry is shown as the large featured card.
export const achievements: Achievement[] = [
  {
    title: '5th Place, ICPC Asia Dhaka Regional 2024',
    text: 'My team IUT_CocolaChampionBiscuit finished 5th among 309 teams at the ICPC Asia Dhaka Regional Contest 2024. We solved 6 of the 12 problems and were the first team to solve Problem C.',
    logo: 'icpc',
    links: [{ label: 'Standings', href: 'https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings' }],
  },
  {
    title: 'Top 10 in the IUT CSE Class of 2024',
    text: 'Graduated 9th in the CSE class of Islamic University of Technology with a CGPA of 3.88 out of 4.00.',
    logo: 'iut',
    links: [],
  },
  {
    title: 'Expert on Codeforces',
    text: 'Reached the Expert rank on Codeforces with a maximum rating of 1892. I have solved more than 1000 problems on Codeforces and more than 1200 across online judges.',
    logo: 'codeforces',
    links: [{ label: 'Codeforces Profile', href: 'https://codeforces.com/profile/Rafio' }],
  },
  {
    title: '2x ICPC Asia West Continent Finalist',
    text: 'Qualified for the ICPC Asia West Continent Final Contest in 2023 and 2024 through the ICPC Asia Dhaka Regional.',
    logo: 'icpc',
    links: [],
  },
  {
    title: 'Rayan World Finals Qualifier',
    text: 'Qualified for the Rayan 2025 World Finals through the selection round of the Rayan Programming Contest 2024, run by Sharif University of Technology.',
    logo: 'rayan',
    links: [{ label: 'Standings', href: 'https://codeforces.com/contest/2034/standings' }],
  },
  {
    title: 'OIC Scholarship, IUT Admission 2019',
    text: 'Received the scholarship of the Organisation of Islamic Cooperation through the IUT admission test in 2019.',
    logo: 'oic',
    links: [],
  },
  {
    title: 'Judge at 10+ Programming Contests',
    text: 'Served as a judge for more than ten national and international contests, including the ICPC Asia Dhaka Regional 2025.',
    icon: 'lucide:gavel',
    links: [{ label: 'Problem setting', href: '/contests/#problem-setting' }],
  },
  {
    title: 'IUPC Rating and Slot Allocation System',
    text: "Started the open-source system that rates universities by their teams' IUPC results. UIU IUPC 2025 was the first to use it. Since then, almost every national inter-university contest in Bangladesh has used it to distribute slots, including hosts outside BCS. Other organizations have asked to use it too.",
    icon: 'lucide:chart-no-axes-column',
    links: [
      { label: 'Repository', href: 'https://github.com/ir-rafio/IUPC-Rating' },
    ],
  },
  {
    title: 'Highest Individual Points in IUT CodeRush 1.0 Capture The Flag',
    text: 'Scored the most points of any participant in CodeRush 1.0, the capture the flag contest at IUT, where my team Backspace placed 2nd among 21 teams.',
    icon: 'lucide:flag',
    links: [{ label: 'IUT news', href: 'https://cse.iutoic-dhaka.edu/news/coderush-1-0' }],
  },
  {
    title: '2x Beyblade Champion',
    text: 'Won two editions of local Beyblade tournaments arranged annually from 2013 to 2017.',
    logo: 'beyblade',
    links: [],
  },
];
