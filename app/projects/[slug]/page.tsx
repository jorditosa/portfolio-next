import { getTexts } from "../../../lib/readMd";
import Project from "./ui/Project";


export default async function ProjectPage({ params: { slug } }) {
  const content = await getTexts(`projects/${slug}`)

  return (
    <Project content={content} slug={slug} />
  )
}