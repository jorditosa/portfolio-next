import Heading from '@/components/Heading'
import { getTexts } from '@/lib/readMd'

export default async function StudiesPage() {
  const content = await getTexts('studies')

  return (
    <section>
      <Heading>Studies</Heading>
      
      <div dangerouslySetInnerHTML={{ __html: content}}>
      </div>
    </section>
  )
}