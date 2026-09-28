// Builds the home page timeline from hand-written events, contests and
// published research, grouped by month (newest first).
import {
  judged,
  participations,
  type JudgedContest,
  type Participation,
} from '@/data/contests';
import { timeline } from '@/data/profile';
import { research } from '@/data/research';

export type TimelineItem = { text: string; href?: string };
export type TimelineGroup = { date: string; items: TimelineItem[] };

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/** Sort key: year * 100 + month. Year-only dates sort before January. */
function key(date: string): number {
  const [a, b] = date.split(' ');
  if (!b) return Number(a) * 100;
  return Number(b) * 100 + MONTHS.indexOf(a) + 1;
}

function participationText(p: Participation): string {
  if (p.timeline) return p.timeline;
  const first = p.highlights.find((h) => h.startsWith('First to solve'));
  const result =
    p.rank === 'Honorable Mention'
      ? `Competed at ${p.name}`
      : `Placed ${p.rank}${p.field ? ` of ${p.field}` : ''} at ${p.name}`;
  return first
    ? `${result}, ${first.charAt(0).toLowerCase()}${first.slice(1)}`
    : result;
}

function judgedText(c: JudgedContest): string {
  const n = c.authored.length;
  const set = n ? `${n} ${n === 1 ? 'problem' : 'problems'}` : '';
  if (c.roles.includes('Coordinator'))
    return `Coordinated ${c.name}${set ? ` and set ${set}` : ''}`;
  if (c.roles.includes('Co-coordinator'))
    return `Co-coordinated ${c.name}${set ? ` and set ${set}` : ''}`;
  if (n) return `Set ${set} for ${c.name}`;
  if (c.name.startsWith('Codeforces')) return `Tested ${c.name}`;
  return `Tested problems for ${c.name}`;
}

export function buildTimeline(): TimelineGroup[] {
  const entries: { date: string; item: TimelineItem }[] = [
    ...timeline.map((t) => ({
      date: t.date,
      item: { text: t.text, href: t.href },
    })),
    ...participations.map((p) => ({
      date: p.date,
      item: { text: participationText(p), href: '/contests/#participation' },
    })),
    ...judged.map((c) => ({
      date: c.date,
      item: { text: judgedText(c), href: '/contests/#problem-setting' },
    })),
    ...research
      .filter((r) => r.published)
      .map((r) => ({
        date: r.published!.date,
        item: {
          text: `Our paper "${r.title}" was published at ${r.published!.venue}.`,
          href: r.published!.href ?? '/research/',
        },
      })),
  ];

  entries.sort((a, b) => key(b.date) - key(a.date));

  const groups: TimelineGroup[] = [];
  for (const e of entries) {
    const last = groups.at(-1);
    if (last && last.date === e.date) last.items.push(e.item);
    else groups.push({ date: e.date, items: [e.item] });
  }
  return groups;
}
