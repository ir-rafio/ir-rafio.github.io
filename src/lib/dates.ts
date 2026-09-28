// Month-level dates written as 'YYYY-MM'. A missing end means "Present".

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parse(ym: string): { y: number; m: number } {
  const [y, m] = ym.split('-').map(Number);
  return { y, m };
}

function now(): { y: number; m: number } {
  const d = new Date();
  return { y: d.getFullYear(), m: d.getMonth() + 1 };
}

export function formatMonth(ym: string): string {
  const { y, m } = parse(ym);
  return `${MONTHS[m - 1]} ${y}`;
}

export function formatPeriod(start: string, end?: string): string {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : 'Present'}`;
}

/** Length of a period, counting both the first and the last month. */
export function formatDuration(start: string, end?: string): string {
  const a = parse(start);
  const b = end ? parse(end) : now();
  const months = (b.y - a.y) * 12 + (b.m - a.m) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ');
}

/** Earliest start and latest end of a set of periods (no end wins). */
export function span(periods: { start: string; end?: string }[]): { start: string; end?: string } {
  const start = periods.map((p) => p.start).sort()[0];
  const end = periods.some((p) => !p.end) ? undefined : periods.map((p) => p.end!).sort().at(-1);
  return { start, end };
}
