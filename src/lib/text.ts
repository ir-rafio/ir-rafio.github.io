import katex from 'katex';

export function rich(text: string): string {
  return text
    .split(/(\$[^$]+\$)/)
    .map((part, i) =>
      i % 2
        ? katex.renderToString(part.slice(1, -1), { throwOnError: true })
        : part
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
    )
    .join('');
}

export const isExternal = (href: string) => /^(https?:)?\/\//.test(href) || href.startsWith('mailto:');
