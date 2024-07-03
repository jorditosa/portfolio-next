import { getMDMetadata } from "../../../lib/readMd";
import Project from "./ui/Project";

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return [
    { slug: 'cursacolls'},
    { slug: 'takespai'},
    { slug: 'deporunners'},
    { slug: 'network-analyzer'}
  ]
}

export default async function ProjectPage({ params }: Props ) {
  const {slug} = params
  const content = getMDMetadata(slug)

  return (
    <article>
      <Project content={content} slug={slug} />
    </article>
  )
}