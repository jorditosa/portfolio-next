import Markdown from 'markdown-to-jsx'
import Heading from '../../components/Heading'
import { getMDMetadata } from '../../lib/readMd'

export default async function StudiesPage() {
  const content = getMDMetadata('background')

  return (
    <section>
      <Heading title='Studies' backBtn={true} />
      
      <Markdown>
        {content}
      </Markdown>
    </section>
  )
}