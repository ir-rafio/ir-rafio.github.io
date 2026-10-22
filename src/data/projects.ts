import type { LogoId } from './logos';

export type Project = {
  title: string;
  category: string;
  date: string;
  icon: string;
  logo?: LogoId;
  description: string[];
  stack: string[];
  links: { label: string; href: string }[];
  badge?: string;
};

export const projectsShown = 6;

export const projects: Project[] = [
  {
    title: 'IUPC Slot Allocation System',
    category: 'Data system',
    date: 'Jan 2025 - Present',
    icon: 'lucide:chart-no-axes-column',
    badge: 'Used nationally',
    description: [
      "Bangladeshi universities host inter-university programming contests (IUPCs) with a limited number of team slots. This system decides how many slots each registered university gets. It uses the institution ratings from Biscuit Rating and hands out slots with a modified D'Hondt method: an institution's priority for its k-th slot is its rating divided by k.",
      'A minimum number of distinct universities is guaranteed a slot, and no university gets more slots than it registered for. Universities that missed recent contests get a bonus on their first slot, and the rest go on a waiting list. Organizers get an Excel workbook that explains the result.',
      'I started the project in January 2025, and UIU IUPC 2025 was the first contest to use it. Abdullah Abrar and Shahjalal Shohag later joined and helped improve it. It is mainly used by BCS, which runs it publicly, and almost every national IUPC has used it since 2025. Hosts outside BCS also use it, and other organizations have asked to use it.',
    ],
    stack: ['Python', 'pandas', 'XlsxWriter', 'pytest'],
    links: [
      { label: 'Live system', href: 'https://therealbcs.com/slots' },
      { label: 'Repository', href: 'https://github.com/ir-rafio/Biscuit-Rating' },
    ],
  },
  {
    title: 'Biscuit Rating',
    category: 'Data system',
    date: 'Oct 2026 - Present',
    icon: 'lucide:trophy',
    logo: 'biscuit',
    badge: 'Used nationally',
    description: [
      'The national rating for onsite programming contests in Bangladesh, covering the IUPCs and the ICPC Dhaka Regional. It rates 1,400+ contestants and 130+ institutions from the official standings of 20 contests since 2024, with a page for each of them.',
      'Contestants list themselves through a form that checks their Codeforces handles. CI rebuilds the ratings and redeploys the site whenever the data changes.',
    ],
    stack: ['Python', 'pandas', 'BeautifulSoup', 'pytest', 'GitHub Actions'],
    links: [
      { label: 'Live site', href: 'https://ir-rafio.github.io/Biscuit-Rating/' },
      { label: 'Repository', href: 'https://github.com/ir-rafio/Biscuit-Rating' },
    ],
  },
  {
    title: 'Mini Deep Learning Library',
    category: 'Teaching',
    date: 'Jun 2026',
    icon: 'lucide:brain-circuit',
    description: [
      'A small PyTorch-like library I wrote for the Pattern Recognition Lab at IUT. It has a Tensor class with automatic differentiation, dataset and model classes, loss functions, accuracy and F1 analyzers, and plots of decision regions.',
      'Students use it to build a k-nearest neighbors classifier, a linear classifier trained with gradient descent and a small neural network, filling in the missing parts themselves before moving on to PyTorch.',
    ],
    stack: ['Python', 'NumPy', 'Matplotlib', 'Jupyter'],
    links: [],
  },
  {
    title: 'GPT (Goru Party T-shirt)',
    category: 'Web app',
    date: 'Jan 2024 - May 2024',
    icon: 'lucide:shirt',
    description: [
      'A platform where IUT CSE-19 students proposed and voted on nicknames for each other. The winning nicknames were printed on the class T-shirts for Goru Party 2024. I set up the project and built the database schema and several backend modules, including request validation.',
    ],
    stack: ['TypeScript', 'Bun', 'Express', 'Prisma', 'PostgreSQL', 'React', 'Zod'],
    links: [{ label: 'Repository', href: 'https://github.com/ir-rafio/GPT' }],
  },
  {
    title: 'Local Judge for Algorithms Lab',
    category: 'Teaching tool',
    date: 'May 2025',
    icon: 'lucide:square-terminal',
    description: [
      'An offline judge for the IUT Algorithms Lab, so students can check their solutions before submitting. It compiles and runs C, C++, Python and Java submissions against the test data, enforces time and memory limits, and reports a verdict for each test, like an online judge would.',
      'The public version ships with the lab repositories. The full version, which I use to prepare labs, also generates test cases, stress-tests solutions and validates submissions.',
    ],
    stack: ['Bash', 'Python', 'Linux'],
    links: [{ label: 'Public version', href: 'https://github.com/ir-rafio/iut-algorithms-lab-1a-summer-23-24' }],
  },
  {
    title: 'UIU CSE Routine Automation',
    category: 'Automation',
    date: 'Jul 2025',
    icon: 'lucide:calendar-range',
    description: [
      'Automated how faculty members of the UIU CSE Department submit and view their class routines. I built it as an interactive Google Sheet driven by Apps Script. It was later adapted into a mobile app for students and faculty.',
    ],
    stack: ['Google Sheets', 'Apps Script', 'JavaScript'],
    links: [],
  },
  {
    title: 'Competitive Programming Library',
    category: 'Library',
    date: 'Sep 2023 - Present',
    icon: 'lucide:library',
    description: [
      'My C++ code library for contests: number theory, data structures such as segment trees and tries, graph algorithms such as LCA and heavy-light decomposition, string algorithms, game theory, and a stress-testing setup.',
    ],
    stack: ['C++'],
    links: [{ label: 'Repository', href: 'https://github.com/ir-rafio/My-Programming-Contest-Library' }],
  },
  {
    title: 'Manim Slides for Structured Programming',
    category: 'Teaching',
    date: 'Apr 2026 - Jun 2026',
    icon: 'lucide:clapperboard',
    description: [
      'Animated lecture slides for CSE 4202 Structured Programming II Lab at IUT, made with Manim and manim-slides. The decks cover binary numbers and bitwise operators, recursion and the call stack, time complexity and basic sorting, linear and binary search, and Git with GitHub.',
      'I wrote a small reusable library for title slides, code blocks, arrays and function diagrams, plus scripts that build every deck from a scene list.',
    ],
    stack: ['Python', 'Manim', 'manim-slides', 'Bash'],
    links: [{ label: 'Repository', href: 'https://github.com/ir-rafio/Animations' }],
  },
  {
    title: 'RapidRoll Advanced',
    category: 'Game',
    date: 'Oct 2021',
    icon: 'lucide:gamepad-2',
    description: [
      'A tribute to Rapid Roll, the classic phone game from our childhood, made with love, tears and SFML. The ball rolls down through rising platforms, collects bonuses and avoids spikes. It is over if the ball falls off the bottom, hits the ceiling or touches an obstacle.',
    ],
    stack: ['C++', 'SFML'],
    links: [{ label: 'Repository', href: 'https://github.com/ir-rafio/RapidRoll-Advanced' }],
  },
  {
    title: 'Abaash',
    category: 'Web app',
    date: 'Nov 2022',
    icon: 'lucide:house',
    description: [
      'A web app for IUT students to find and rent flats, and for owners to manage their properties and tenants. It has search and filters, reservation requests, messaging and an owner dashboard.',
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'EJS', 'MariaDB'],
    links: [{ label: 'Repository', href: 'https://github.com/Dcoders-IUT/Abaash' }],
  },
  {
    title: 'Vegetable Classification and Quality Assessment',
    category: 'Deep learning',
    date: 'Jun 2023',
    icon: 'lucide:scan-eye',
    description: [
      'Fine-tuned eight ImageNet-pretrained models (AlexNet, VGG-16, ResNet-50, ResNet-152, DenseNet-169, EfficientNetV2-S, MobileNetV3 and ShuffleNetV2) to classify vegetables and their quality on the VegNet dataset. Each model was evaluated with 5-fold cross-validation to compare them fairly.',
    ],
    stack: ['Python', 'PyTorch', 'torchvision', 'pandas', 'Matplotlib'],
    links: [{ label: 'Repository', href: 'https://github.com/ir-rafio/Vegetable-Classification-and-Quality-Assessment' }],
  },
];
