'use client'

import Heading from "@/components/Heading";
import FadeUpAnimation from "@/components/animations/fade-up/FadeUpAnimation";
import Markdown from "markdown-to-jsx";

interface Props {
    content: any;
    slug: string;
}


export default function Project({content, slug} : Props) {
    return (
        <FadeUpAnimation>
            <Heading title={`Project ${slug}`} backBtn={true} />
            <Markdown>
                {content}
            </Markdown>
      </FadeUpAnimation>
    )
}