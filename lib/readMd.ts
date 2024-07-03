import fs from 'fs';

export const getMDMetadata = (slug: string) => {
  const folder = "content/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf-8")
  return content
}