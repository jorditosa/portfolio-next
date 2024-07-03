'use client'

import Markdown from "markdown-to-jsx";
import Heading from "../../../components/Heading";

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