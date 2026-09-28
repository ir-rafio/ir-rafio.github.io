// Notion-style tag colors. Add a tag here to pin its color;
// unknown tags get a stable color picked from their name.
export const tagColors = ['gray', 'brown', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'red'] as const;
export type TagColor = (typeof tagColors)[number];

const pinned: Record<string, TagColor> = {
  Featured: 'yellow',
  Life: 'green',
  Teaching: 'blue',
  Education: 'purple',
  IUT: 'orange',
};

export function tagColor(tag: string): TagColor {
  if (pinned[tag]) return pinned[tag];
  let h = 0;
  for (const ch of tag) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return tagColors[h % tagColors.length];
}
