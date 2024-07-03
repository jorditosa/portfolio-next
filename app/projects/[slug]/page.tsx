import { getMDMetadata } from "../../../lib/readMd";
import Project from "./ui/Project";


export default async function ProjectPage({ params: { slug } }) {
  const content = getMDMetadata(slug)

  return (
    <Project content={content} slug={slug} />
  )
}