import { marked } from 'marked'
import { readFile } from 'node:fs/promises'

export async function getTexts(slug: string) {
  const text = await readFile(`./content/${slug}.md`, 'utf-8')
  const html = marked.parse(text)
  return html
}

