import Heading from '../../components/Heading'
import { getTexts } from '../../lib/readMd'

export default async function BackgroundPage() {
  const content = await getTexts('background')
  return (
    <section>
      <Heading title='Professional career' backBtn={true} />
      <div dangerouslySetInnerHTML={{ __html: content}}>
      </div>
    </section>
  )
}