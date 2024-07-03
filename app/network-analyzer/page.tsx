
import { getMDMetadata } from "../../lib/readMd";
import Project from "./ui/Project";



export default async function ProjectPage() {
  const content = getMDMetadata('network-analyzer')

  return (
    <article>
      <Project content={content} slug={'network-analyzer'} />
    </article>
  )
}