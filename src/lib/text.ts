/** Escape HTML, then turn **bold** into <strong>. Used with set:html. */
export function rich(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/** True for links that leave the site. */
export const isExternal = (href: string) => /^(https?:)?\/\//.test(href) || href.startsWith('mailto:');
