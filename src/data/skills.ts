export type SkillGroup = {
  title: string;
  icon: string;
  skills: { name: string; icon?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: 'lucide:code',
    skills: [
      { name: 'C / C++', icon: 'simple:cplusplus' },
      { name: 'Python', icon: 'simple:python' },
      { name: 'TypeScript', icon: 'simple:typescript' },
      { name: 'JavaScript', icon: 'simple:javascript' },
      { name: 'Java', icon: 'simple:openjdk' },
      { name: 'Bash', icon: 'simple:gnubash' },
      { name: 'MATLAB' },
      { name: 'x86 Assembly' },
    ],
  },
  {
    title: 'Data Science',
    icon: 'lucide:brain-circuit',
    skills: [
      { name: 'PyTorch', icon: 'simple:pytorch' },
      { name: 'scikit-learn', icon: 'simple:scikitlearn' },
      { name: 'NumPy', icon: 'simple:numpy' },
      { name: 'pandas', icon: 'simple:pandas' },
      { name: 'OpenCV', icon: 'simple:opencv' },
      { name: 'Matplotlib' },
      { name: 'Plotly', icon: 'simple:plotly' },
      { name: 'Jupyter', icon: 'simple:jupyter' },
      { name: 'Web Scraping (BeautifulSoup)' },
      { name: 'Automation', icon: 'lucide:workflow' },
    ],
  },
  {
    title: 'AI Tools',
    icon: 'lucide:sparkles',
    skills: [
      { name: 'Claude Code', icon: 'simple:claude' },
      { name: 'Codex', icon: 'simple:openai' },
      { name: 'OpenCode' },
    ],
  },
  {
    title: 'Typesetting and Visuals',
    icon: 'lucide:pen-tool',
    skills: [
      { name: 'LaTeX', icon: 'simple:latex' },
      { name: 'TikZ' },
      { name: 'Manim' },
      { name: 'Markdown', icon: 'simple:markdown' },
      { name: 'Lucidchart' },
    ],
  },
  {
    title: 'Tools and Systems',
    icon: 'lucide:settings-2',
    skills: [
      { name: 'Git', icon: 'simple:git' },
      { name: 'GitHub Actions (CI)', icon: 'simple:githubactions' },
      { name: 'Linux', icon: 'simple:linux' },
      { name: 'Cubic (Ubuntu ISO)', icon: 'simple:ubuntu' },
      { name: 'Docker', icon: 'simple:docker' },
      { name: 'Google Apps Script', icon: 'simple:googleappsscript' },
    ],
  },
  {
    title: 'Web and Databases',
    icon: 'lucide:server',
    skills: [
      { name: 'Node.js', icon: 'simple:nodedotjs' },
      { name: 'Express', icon: 'simple:express' },
      { name: 'Bun', icon: 'simple:bun' },
      { name: 'React', icon: 'simple:react' },
      { name: 'Prisma', icon: 'simple:prisma' },
      { name: 'Zod', icon: 'simple:zod' },
      { name: 'PostgreSQL', icon: 'simple:postgresql' },
      { name: 'MariaDB', icon: 'simple:mariadb' },
      { name: 'JDBC / Hibernate / JSP', icon: 'simple:hibernate' },
    ],
  },
];
