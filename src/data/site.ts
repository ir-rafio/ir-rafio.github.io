import { execSync } from 'node:child_process';

export const site = {
  name: 'Irfanur Rahman Rafio',
  fullName: 'Md. Irfanur Rahman Rafio',
  nickname: 'Rafio',
  url: 'https://ir-rafio.github.io',
  description:
    'Irfanur Rahman Rafio: CSE graduate of Islamic University of Technology, former Lecturer at United International University, competitive programmer and problem setter.',
  email: 'irfanurrahmanrafio@gmail.com',
  cv: '/cv.pdf',
};

export type Social = { label: string; href: string; icon: string };

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/ir-rafio', icon: 'brands:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafio', icon: 'brands:linkedin-in' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'lucide:mail' },
  { label: 'Facebook', href: 'https://www.facebook.com/ir.rafio', icon: 'brands:facebook-f' },
];

export const profiles: Social[] = [{ label: 'ICPC', href: 'https://icpc.global/ICPCID/NRUBYOXZ6LO2', icon: 'lucide:trophy' }];

export const highlightedBlog = 'y-r-u-running';

export type NavItem = { label: string; href: string; icon: string };

export const mainNav: NavItem[] = [
  { label: 'Research', href: '/research/', icon: 'lucide:flask-conical' },
  { label: 'Teaching', href: '/teaching/', icon: 'lucide:presentation' },
  { label: 'Programming Contests', href: '/contests/', icon: 'lucide:code-xml' },
  { label: 'Blogs', href: '/blog/', icon: 'lucide:pen-line' },
];

function lastUpdated(): Date {
  try {
    const iso = execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    if (iso) return new Date(iso);
  } catch {}
  return new Date();
}

export const updatedOn = lastUpdated().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
