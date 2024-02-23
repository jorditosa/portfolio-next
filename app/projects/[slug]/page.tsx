import Heading from "../../../components/Heading";
import { getTexts } from "../../../lib/readMd";


export default async function ProjectPage() {
  const content = await getTexts('projects/deporunners')

  return (
     <section>
      <Heading> </Heading>
      <div dangerouslySetInnerHTML={{ __html: content}}></div>
    </section>
  )
}