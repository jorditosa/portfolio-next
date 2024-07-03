import { marked } from 'marked';
import { readFile } from 'node:fs/promises';

export async function getTexts(slug: string) {
  try {
    const text = await readFile(`public/content/${slug}.md`, 'utf-8');
    const html = marked.parse(text);
    return html;
  } catch (error) {
    console.error(`Error reading or parsing file for slug "${slug}":`, error);
    throw new Error(`Unable to get content for ${slug}`);
  }
}
