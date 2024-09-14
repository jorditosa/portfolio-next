import Heading from '@/components/Heading'
import { getMDMetadata } from '@/lib/readMd'
import Markdown from 'markdown-to-jsx'

export default async function StudiesPage() {
  const content = getMDMetadata('studies')

  return (
    <section>
      <Heading title='Studies' backBtn={true} />
      
      <Markdown>
        {content}
      </Markdown>
    </section>
  )
}