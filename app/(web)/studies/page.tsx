import Heading from '@/components/Heading'
import { getMDMetadata } from '@/lib/readMd'
import Markdown from 'markdown-to-jsx'
import StudiesBodyPage from './ui/StudiesBody'

export default async function StudiesPage() {
  const content = getMDMetadata('studies')

  return (
    <section>
      <StudiesBodyPage content={content} />
    </section>
  )
}