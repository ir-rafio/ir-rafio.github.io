// Teaching page and home "Teaching" section.

export const teachingIntro: string[] = [
  'Alhamdulillah. I am grateful to Allah for giving me the chance to be a teacher.',
  'I have been helping my friends with their studies since my school days. At IUT, I kept doing the same in our group study sessions in the dorms, and my friends encouraged me a lot to become a teacher.',
  'In 2022, I spent a semester break teaching free math classes at my old school. From January 2023, I took weekly competitive programming classes for juniors at IUT. After graduating, I started teaching lab courses at IUT as a part-time Lecturer, and from November 2024 to February 2026 I was a Lecturer at United International University.',
  'I believe learning should be fun. As a student, I asked a lot of questions, and some teachers liked me more for it. I want my students to ask questions too, and to learn with curiosity.',
];

export type Person = { name: string; href: string; fictional?: boolean };

// People who inspired me to become a teacher, in my own order.
export const inspirations: Person[] = [
  { name: 'Chamok Hasan', href: 'https://chamokhasan.com/' },
  {
    name: 'Md. Maksudul Hasan Jewel',
    href: 'https://www.linkedin.com/in/md-maksudul-hossain-4300a095/',
  },
  {
    name: 'Mahmudul Hasan Sohag',
    href: 'https://en.wikipedia.org/wiki/Mahmudul_Hasan_Sohag',
  },
  {
    name: 'Ashikuzzaman Rasel',
    href: 'https://www.linkedin.com/in/md-ashikuzzaman-',
  },
  {
    name: 'Md. Anisur Rahman',
    href: 'https://www.facebook.com/share/1F2RfZ66qw/',
  },
  {
    name: 'Sabbir Ahmed',
    href: 'https://cse.iutoic-dhaka.edu/profile/sabbir/',
  },
  {
    name: 'Muhammad Mahbub Alam',
    href: 'https://cse.iutoic-dhaka.edu/profile/mahbub',
  },
  {
    name: 'Imtiaj Ahmed Chowdhury',
    href: 'https://cse.iutoic-dhaka.edu/profile/imtiajahmed',
  },
  {
    name: 'Md. Bakhtiar Hasan',
    href: 'https://cse.iutoic-dhaka.edu/profile/bakhtiar',
  },
  { name: 'Grant Sanderson', href: 'https://www.3blue1brown.com/' },
  { name: 'Derek Muller', href: 'https://www.veritasium.com/' },
  { name: 'Minhajul Bashir', href: 'https://cse.uiu.ac.bd/faculty/minhajul/' },
  {
    name: 'John Keating',
    href: 'https://www.imdb.com/title/tt0097165/characters/nm0000245/',
    fictional: true,
  },
  {
    name: 'Ram Shankar Nikumbh',
    href: 'https://www.imdb.com/title/tt0986264/characters/nm0451148/',
    fictional: true,
  },
  {
    name: 'Eikichi Onizuka',
    href: 'https://myanimelist.net/character/434/Eikichi_Onizuka',
    fictional: true,
  },
  {
    name: 'Koro-sensei',
    href: 'https://myanimelist.net/character/65643/Koro-sensei',
    fictional: true,
  },
];

export type Course = {
  /** Used to pick and order the courses on the home page. */
  id: string;
  code?: string;
  title: string;
  terms: string[];
  kind: 'Theory' | 'Lab' | 'Training' | 'School';
  points: string[];
};

export type CourseGroup = {
  institution: string;
  short: string;
  /** Applies to every course in the group. */
  note?: string;
  courses: Course[];
};

// Newest first within each institution.
export const courseGroups: CourseGroup[] = [
  {
    institution: 'Islamic University of Technology',
    short: 'IUT',
    courses: [
      {
        id: 'sp2',
        code: 'CSE 4202',
        title: 'Structured Programming II Lab',
        terms: ['Summer 24-25'],
        kind: 'Lab',
        points: [
          'Restructured the syllabus. It now covers bitwise operations, recursion, an introduction to algorithms and time complexity, basic sorting and searching, multi-file programming, Git and GitHub, pointer arithmetic, linked lists and file I/O.',
          'Spent extra time on building a deep, intuitive understanding of recursion, which students often find hard.',
          'Learned Manim before the semester and used it to animate the slides.',
          'Compiled a set of assignment tasks for every topic so students could practice actively instead of only listening.',
        ],
      },
      {
        id: 'pr',
        code: 'CSE 4836',
        title: 'Pattern Recognition Lab',
        terms: ['Summer 24-25'],
        kind: 'Lab',
        points: [
          "Designed the labs around converting the black boxes of deep learning into white boxes, to unlock students' intuition about how the models work.",
          'Students started with a small PyTorch-like library that I wrote, including a manual implementation of a Tensor with automatic differentiation. They read the code and filled in the gaps.',
          'PyTorch came next, and every later lab stayed focused on intuition.',
          'Created small datasets so the tasks stay simple enough for a person to follow.',
          'Built a CNN with hand-assigned weights that tells plus signs from minus signs, a task simpler than MNIST, and explained what each part of the network does.',
        ],
      },
      {
        id: 'algo',
        code: 'CSE 4404',
        title: 'Algorithms Lab',
        terms: ['Summer 23-24'],
        kind: 'Lab',
        points: [
          'Modified the syllabus and prepared new tasks on sorting, graph traversal, shortest paths, minimum spanning trees, dynamic programming, divide and conquer, greedy algorithms and max flow.',
          'Made a modular LaTeX template for lab assignments. Every programming lab in IUT CSE now uses it.',
          'Developed a local judge so students can test their solutions offline. The full version also generates test cases and stress-tests solutions.',
          'Before the semester, planned and initiated a uniform OS image for the labs, which a friend completed. Every lab at IUT now runs on it.',
          'Organized two contests with original problems for the lab.',
        ],
      },
      {
        id: 'ai',
        code: 'CSE 4712',
        title: 'Artificial Intelligence Lab',
        terms: ['Winter 23-24'],
        kind: 'Lab',
        points: [
          'Taught search, minimax, expectimax and Markov decision processes using Pacman, maze and other examples.',
          'Checked assignments and helped students while they worked on the lab tasks.',
        ],
      },
      {
        id: 'cp',
        title: 'Competitive Programming Training',
        terms: ['Jan 2023 - Present'],
        kind: 'Training',
        points: [
          'Started taking weekly classes for juniors in the IUT Programming Community in January 2023, and became the official trainer in September 2024.',
          'Teach data structures, algorithms, problem solving and contest strategy, and lead post-contest analyses after national and online contests.',
          'Design practice contests, sometimes with original problems.',
        ],
      },
    ],
  },
  {
    institution: 'United International University',
    short: 'UIU',
    courses: [
      {
        id: 'dsa1',
        code: 'CSE 2215',
        title: 'Data Structures and Algorithms I',
        terms: ['Spring 25', 'Summer 25', 'Fall 25'],
        kind: 'Theory',
        points: [
          'Taught complexity analysis, recursion, searching and sorting, linked lists, stacks and queues, trees, heaps and graph traversal.',
          'Prepared a new lecture on binary search for the syllabus, with a problem set for practice.',
          'Wrote some of the most fun and creative questions for the DSA I exams.',
        ],
      },
      {
        id: 'dsa1-lab',
        code: 'CSE 2216',
        title: 'Data Structures and Algorithms I Lab',
        terms: ['Spring 25', 'Fall 25'],
        kind: 'Lab',
        points: [
          'Ran weekly coding labs on sorting and searching, linked lists, stacks, queues, trees and graph traversal.',
          'Assessed students through coding tests, assignments and viva.',
        ],
      },
      {
        id: 'dataviz',
        code: 'DS 3521',
        title: 'Data Visualization',
        terms: ['Summer 25'],
        kind: 'Theory',
        points: [
          'Designed the **first offering** of the course, including the syllabus, lectures and exams.',
          'Covered quantities, distributions, hierarchical and multivariate data, time series and trends, uncertainty, and high-dimensional data.',
          'Ended with best practices from Edward Tufte, such as the data-ink ratio, the lie factor and avoiding chartjunk.',
          'When students asked, took extra time to explain the math and statistics behind the topics. Many of them later thanked me for pushing them to think critically.',
        ],
      },
      {
        id: 'dataviz-lab',
        code: 'DS 3522',
        title: 'Data Visualization Lab',
        terms: ['Summer 25'],
        kind: 'Lab',
        points: [
          'Defined the syllabus of the first offering and wrote all the lab tasks.',
          'Students worked in Google Colab with NumPy, pandas and Plotly, covering color theory, clustering with k-means and k-medoids, and embedding plots for high-dimensional data.',
          'Finished with a final project.',
        ],
      },
      {
        id: 'spl',
        code: 'CSE 1111',
        title: 'Structured Programming Language',
        terms: ['Fall 24', 'Spring 25'],
        kind: 'Theory',
        points: [
          'Taught programming in C, from control structures and functions to recursion, arrays, strings, pointers, structures and file I/O.',
          'Worked with the course coordinator on the exam questions, improving their typesetting for readability and keeping the code in them clean and consistent.',
        ],
      },
      {
        id: 'oop',
        code: 'CSE 1115',
        title: 'Object Oriented Programming',
        terms: ['Fall 24'],
        kind: 'Theory',
        points: [
          'Taught object oriented programming in Java: classes and objects, encapsulation, inheritance, polymorphism, abstraction and interfaces.',
          'Also covered exception handling, GUI programming, file I/O and the collections framework.',
        ],
      },
      {
        id: 'uiucpc',
        title: 'UIU Competitive Programming Community',
        terms: ['Nov 2024 - Feb 2026'],
        kind: 'Training',
        points: [
          'Moderated the UIU Competitive Programming Community (UIUCPC) and trained its members.',
        ],
      },
    ],
  },
  {
    institution: 'Shahajuddin Sarker Model School',
    short: 'School',
    courses: [
      {
        id: 'school-math',
        title: 'General Mathematics',
        terms: ['May 2022 - Jul 2022'],
        kind: 'School',
        points: [
          'Taught free math classes at my old school during a semester break.',
          'Tried to help students lose their fear of math and science, and to value reasoning over memorizing.',
        ],
      },
    ],
  },
];

/** Courses shown on the home page, in this order. */
export const homeCourses = ['sp2', 'pr', 'dataviz', 'algo', 'dsa1', 'cp'];
