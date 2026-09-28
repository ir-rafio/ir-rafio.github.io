export type Project = {
  title: string;
  category: string;
  date: string;
  icon: string;
  /** One string per paragraph. */
  description: string[];
  stack: string[];
  links: { label: string; href: string }[];
  badge?: string;
};

// The first project is shown as a large card. Of the rest, the first
// `projectsShown` are visible and "View more" reveals the others.
export const projectsShown = 6;

export const projects: Project[] = [
  {
    title: 'IUPC Rating and Slot Allocation System',
    category: 'Data system',
    date: 'Jan 2025 - Present',
    icon: 'lucide:chart-no-axes-column',
    badge: 'Used nationally',
    description: [
      "Bangladeshi universities host inter-university programming contests (IUPCs) with a limited number of team slots. This system decides how many slots each university gets. It scrapes the final standings of recent onsite contests, scores every team by rank and problems solved, and combines each university's best teams into one rating. Older contests lose weight over time, and ICPC counts three times as much.",
      "Slots are then handed out with a modified D'Hondt method, with a guaranteed number of distinct universities, a cap per university and a waiting list. I started the project in January 2025, and UIU IUPC 2025 was the first contest to use it. Abdullah Abrar and Shahjalal Shohag later joined and helped improve it.",
      'BCS runs it publicly and it rates more than 150 institutions. The code is open source, hosts outside BCS use it, and other organizations have asked to use it for their contests.',
    ],
    stack: ['Python', 'pandas', 'NumPy', 'BeautifulSoup', 'Jupyter', 'pytest'],
    links: [
      { label: 'Live system', href: 'https://therealbcs.com/slots' },
      { label: 'Repository', href: 'https://github.com/ir-rafio/IUPC-Rating' },
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
      'Automated how faculty members of the UIU CSE Department submit and view their class routines. I built it as an interactive Google Sheet driven by Apps Script. It was later adapted into a mobile app so every student and faculty member could check routines easily.',
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
      'My C++ code library for contests: number theory, data structures such as segment trees and tries, graph algorithms such as LCA and heavy-light decomposition, string algorithms, game theory, and a stress-testing recipe.',
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
      'A web app that helps IUT students find and rent flats that match their preferences, and lets owners manage their properties and tenants. It has search and filters, reservation requests, messaging and an owner dashboard.',
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
