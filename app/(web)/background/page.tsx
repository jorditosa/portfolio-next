import Heading from '@/components/Heading'
import { getMDMetadata } from '@/lib/readMd'
import Markdown from 'markdown-to-jsx'
import BackgroundBodyPage from './ui/BackgroundBody'

export default async function BackgroundPage() {
  const content = getMDMetadata('background')

  return (
    <section>
      <BackgroundBodyPage content={content} />
    </section>
  )
}