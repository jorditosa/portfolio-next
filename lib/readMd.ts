import { marked } from 'marked'
import { readFile } from 'node:fs/promises'

export async function getTexts(slug) {
  const text = await readFile(`./content/${slug}.md`, 'utf-8')
  const html = marked(text)
  return html
}

