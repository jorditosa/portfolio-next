'use client'

import Heading from "@/components/Heading";
import Markdown from "markdown-to-jsx";

interface Props {
    content: any;
    slug: string;
}


export default function Project({content, slug} : Props) {
    return (
        <section>
        <Heading title={`Project ${slug}`} backBtn={true} />
        <Markdown>
            {content}
        </Markdown>
      </section>
    )
}