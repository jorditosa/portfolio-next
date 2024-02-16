import Heading from '@/components/Heading'
import { getTexts } from '@/lib/readMd'

export default async function BackgroundPage() {
  const content = await getTexts('background')
  return (
    <section>
      <Heading>Professional career</Heading>
      <div dangerouslySetInnerHTML={{ __html: content}} className='prose prose-slate'>
      </div>
    </section>
  )
}