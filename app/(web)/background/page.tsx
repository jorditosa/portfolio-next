import Heading from '@/components/Heading'
import { getMDMetadata } from '@/lib/readMd'
import Markdown from 'markdown-to-jsx'

export default async function BackgroundPage() {
  const content = getMDMetadata('background')

  return (
    <section>
      <Heading title='Professional career' backBtn={true} />
      <Markdown>
        {content}
      </Markdown>
    </section>
  )
}