import { getMDMetadata } from "../../../lib/readMd";
import Project from "./ui/Project";

interface Props {
  params: { slug: string}
}

export default async function ProjectPage({ params }: Props ) {
  const content = getMDMetadata(params.slug)

  return (
    <article>
      <Project content={content} slug={params.slug} />
    </article>
  )
}