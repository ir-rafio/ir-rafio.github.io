import type { LogoId } from './logos';

export type Role = {
  title: string;
  /** 'YYYY-MM'. Leave `end` out for a current role. */
  start: string;
  end?: string;
  /** A sentence or two shown above the points. */
  summary?: string;
  // ** ** marks bold text, as on the rest of the site
  points: string[];
};

export type Organization = {
  name: string;
  logo: LogoId;
  location: string;
  links: { label: string; href: string }[];
  roles: Role[];
};

// Ordered by relevance: teaching first, then industry, then contest bodies.
export const experience: Organization[] = [
  {
    name: 'Islamic University of Technology',
    logo: 'iut',
    location: 'Gazipur, Bangladesh',
    links: [{ label: 'Department', href: 'https://cse.iutoic-dhaka.edu/' }],
    roles: [
      {
        title: 'Part-time Lecturer (CSE)',
        start: '2024-09',
        summary:
          'I teach and supervise lab courses in the CSE department, and redesign them so students understand the ideas behind the code they write.',
        points: [
          'Taught Structured Programming II Lab, Pattern Recognition Lab, Algorithms Lab and Artificial Intelligence Lab.',
          'Rebuilt Structured Programming II Lab and Pattern Recognition Lab around intuition, with animated lectures, small hand-made datasets and topic-wise assignments.',
          'Revised the Algorithms Lab and created a modular **LaTeX template for lab assignments**, which every programming lab in the department now uses.',
          'Developed an offline **local judge** with test generation and stress testing. Other programming labs at IUT adopted it.',
          'Planned and initiated a **uniform OS image** for the labs. A friend completed the project, and every lab at IUT now runs on it.',
          'Organized two lab contests with original problems, and assessed lab reports and viva examinations.',
        ],
      },
      {
        title: 'Competitive Programming Trainer',
        start: '2023-01',
        summary:
          'I started taking classes for junior students in January 2023 and was officially appointed as the trainer in September 2024.',
        points: [
          'Teach weekly classes on data structures, algorithms, problem solving and contest strategy.',
          'Lead post-contest analyses after national and online contests.',
          'Coordinated the Intra-IUT Junior Programming Contests and the IUT Intra University Programming Contest 2025, and set problems for them.',
        ],
      },
    ],
  },
  {
    name: 'United International University',
    logo: 'uiu',
    location: 'Dhaka, Bangladesh',
    links: [{ label: 'Department', href: 'https://cse.uiu.ac.bd/' }],
    roles: [
      {
        title: 'Lecturer (CSE)',
        start: '2024-11',
        end: '2026-02',
        points: [
          'Taught Structured Programming Language, Object Oriented Programming, Data Structures and Algorithms I, and Data Visualization, along with their labs.',
          'Designed the **first offering of Data Visualization** and its lab, including the syllabus, lectures, lab tasks and exams.',
          'Added a lecture on binary search to Data Structures and Algorithms I and built a practice problem bank for it.',
          'Prepared a solution and a marking rubric after every exam, for the students and the other teachers of the course.',
          "Built the department's **routine automation system** for collecting and publishing faculty routines.",
          'Moderated and trained the UIU Competitive Programming Community, and organized the IUPC and ICT Olympiad of UIU CSE Fest 2025.',
          'Took part in department meetings and suggested ways to improve the quality of the CSE department.',
        ],
      },
    ],
  },
  {
    name: 'Therap (BD) Ltd.',
    logo: 'therap',
    location: 'Dhaka, Bangladesh',
    links: [{ label: 'Website', href: 'https://www.therapbd.com/' }],
    roles: [
      {
        title: 'Associate Software Engineer (Development)',
        start: '2024-07',
        end: '2024-10',
        points: [
          'Selected through campus recruitment at IUT.',
          'Trained in object oriented design, Java, JDBC, Hibernate ORM and JSP.',
        ],
      },
    ],
  },
  {
    name: 'BinduLogic Limited',
    logo: 'bindulogic',
    location: 'Dhaka, Bangladesh',
    links: [{ label: 'Website', href: 'https://bindulogic.com/' }],
    roles: [
      {
        title: 'Software Engineer Intern',
        start: '2023-06',
        end: '2023-09',
        summary: 'This internship was part of the industrial training course at IUT.',
        points: [
          'Built the backend of BinduHealth OPD in TypeScript with Prisma, including the database schema and request validation.',
          'Led an improvement of the script checker in BinduExam, using graph algorithms and geometry to make it faster and more accurate.',
        ],
      },
    ],
  },
  {
    name: 'Bangladesh Association of Problem Setters',
    logo: 'baps',
    location: 'Bangladesh',
    links: [{ label: 'Website', href: 'https://baps-bgd.github.io/' }],
    roles: [
      {
        title: 'Problem Setter and Judge',
        start: '2024-12',
        points: [
          'Wrote **4 original problems** and tested **14** for the ICPC Asia Dhaka Regional 2025 and its preliminary contest.',
          'Built the **plagiarism checker** for the ICPC Dhaka Regional 2025 Preliminary. It flagged **251 submissions from 124 teams** across 51 institutions.',
          'Set and tested problems for other national contests, including the KUET, UIU and NSU IUPCs.',
        ],
      },
    ],
  },
  {
    name: 'Bangladesh Competitive Programming Society',
    logo: 'bcs',
    location: 'Bangladesh',
    links: [{ label: 'Website', href: 'https://therealbcs.com/' }],
    roles: [
      {
        title: 'Problem Setter and Judge',
        start: '2025-04',
        points: [
          'Set and tested problems for national contests, including the DUET, CUET and SUST IUPCs.',
          'Worked with Shahjalal Shohag to finalize the problemset of IUT IUPC 2026.',
          'Answered clarifications and fixed issues on site during contests.',
          'Started the **IUPC slot allocation system**, which BCS runs publicly. It is open source, and hosts outside BCS use it too.',
        ],
      },
    ],
  },
];
