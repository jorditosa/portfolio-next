import { getTexts } from '@/lib/readMd'

export default async function BackgroundPage() {
  const content = await getTexts('background')
  return (
    <section className=''>
      <div dangerouslySetInnerHTML={{ __html: content}} className='prose prose-slate'>
      </div>
    </section>
  )
}