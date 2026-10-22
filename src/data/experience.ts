import type { LogoId } from './logos';

export type Role = {
  title: string;
  start: string;
  end?: string;
  summary?: string;
  points: string[];
};

export type Organization = {
  name: string;
  logo: LogoId;
  location: string;
  links: { label: string; href: string }[];
  roles: Role[];
};

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
        points: [
          'Taught Structured Programming II Lab, Pattern Recognition Lab, Algorithms Lab and Artificial Intelligence Lab.',
          'Rebuilt Structured Programming II Lab and Pattern Recognition Lab around intuition, with animated lectures, small hand-made datasets and topic-wise assignments.',
          'Revised the Algorithms Lab and created a modular **LaTeX template for lab assignments**, which every programming lab in the department now uses.',
          'Developed an offline **local judge** with test generation and stress testing. Other programming labs at IUT adopted it.',
          'Planned and initiated a **uniform OS image** for the labs. My roommate Reaz Hassan Joarder, a faculty member at IUT, completed the project, and every lab at IUT now runs on it.',
          'Organized two contests with original problems for Algorithms Lab.',
          'Assessed lab reports and viva examinations.',
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
          'Coordinated several intra-university contests and set original problems for them.',
          'Helped form contest teams and mentored several of them.',
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
          'Added a lecture on binary search to Data Structures and Algorithms I.',
          'Built a practice problem bank covering the whole syllabus of Data Structures and Algorithms I.',
          'Prepared a solution and a marking rubric after every exam, for the students and the other teachers of the course.',
          "Built the department's **routine automation system** for collecting and publishing faculty routines.",
          'Moderated and trained the UIU Competitive Programming Community, and organized the IUPC and ICT Olympiad of UIU CSE Fest 2025.',
          'Took part in department meetings and shared suggestions.',
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
        summary:
          'This internship was part of the industrial training course at IUT.',
        points: [
          'Worked on the backend of BinduHealth OPD in TypeScript with Prisma. Contributed to the database design, built several modules including online prescriptions, and worked on request validation.',
          'Led an improvement of the script checker in BinduExam, using vector geometry and graph traversal algorithms to make it faster and more accurate.',
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
        title: 'General Moderator',
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
