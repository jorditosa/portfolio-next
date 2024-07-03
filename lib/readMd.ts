'use server'

import { marked } from 'marked';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function getTexts(slug: string) {
  const env = process.env.NODE_ENV
  const route = env === 'development' ? 'public/content' : 'content'

  const file_path = join(process.cwd(), route, `/${slug}.md`)

  try {
    const text = await readFile(file_path, 'utf-8');
    const html = marked.parse(text);
    return html;
  } catch (error) {
    console.error(`Error reading or parsing file for slug "${slug}":`, error);
    throw new Error(`Unable to get content for ${slug}`);
  }
}
