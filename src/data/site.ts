import { execSync } from 'node:child_process';

export const site = {
  name: 'Irfanur Rahman Rafio',
  fullName: 'Md. Irfanur Rahman Rafio',
  nickname: 'Rafio',
  url: 'https://ir-rafio.github.io',
  description:
    'Irfanur Rahman Rafio: CSE graduate of Islamic University of Technology, former Lecturer at United International University, competitive programmer and problem setter.',
  email: 'irfanurrahmanrafio@gmail.com',
  // Built from the separate LaTeX CV project; copy its PDF here to update it.
  cv: '/cv.pdf',
};

export type Social = { label: string; href: string; icon: string };

/** Ways to reach me. Shown in the hero and the footer. */
export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/ir-rafio', icon: 'brands:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafio', icon: 'brands:linkedin-in' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'lucide:mail' },
  { label: 'Facebook', href: 'https://www.facebook.com/ir.rafio', icon: 'brands:facebook-f' },
];

/** Profiles that are not contact media. Shown only in the hero. */
export const profiles: Social[] = [{ label: 'ICPC', href: 'https://icpc.global/ICPCID/NRUBYOXZ6LO2', icon: 'lucide:trophy' }];

/** The blog shown in the large card on the home page (its folder name). */
export const highlightedBlog = 'learn-to-be-bad-at-stuff';

export type NavItem = { label: string; href: string; icon: string };

export const mainNav: NavItem[] = [
  { label: 'Research', href: '/research/', icon: 'lucide:flask-conical' },
  { label: 'Teaching', href: '/teaching/', icon: 'lucide:presentation' },
  { label: 'Programming Contests', href: '/contests/', icon: 'lucide:code-xml' },
  { label: 'Blogs', href: '/blog/', icon: 'lucide:pen-line' },
];

// Sorted by relevance to a PhD application; Contact stays last.
export const moreNav: NavItem[] = [
  { label: 'Education', href: '/#education', icon: 'lucide:graduation-cap' },
  { label: 'Achievements', href: '/#achievements', icon: 'lucide:award' },
  { label: 'Work Experience', href: '/#experience', icon: 'lucide:briefcase' },
  { label: 'Projects', href: '/#projects', icon: 'lucide:folder-open' },
  { label: 'Technical Skills', href: '/#skills', icon: 'lucide:wrench' },
  { label: 'Activities', href: '/#activities', icon: 'lucide:users' },
  { label: 'Contact', href: '/#contact', icon: 'lucide:send' },
];

/** Date of the latest git commit, falling back to the build date. */
function lastUpdated(): Date {
  try {
    const iso = execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    if (iso) return new Date(iso);
  } catch {
    /* not a git checkout */
  }
  return new Date();
}

export const updatedOn = lastUpdated().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
