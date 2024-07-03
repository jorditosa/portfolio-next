import Heading from "../../../components/Heading";
import { getTexts } from "../../../lib/readMd";


export default async function ProjectPage({ params: { slug } }) {
  const content = await getTexts(`projects/${slug}`)

  return (
     <section>
      <Heading title={`Project ${slug}`} backBtn={true} />
      <div dangerouslySetInnerHTML={{ __html: content}}></div>
    </section>
  )
}