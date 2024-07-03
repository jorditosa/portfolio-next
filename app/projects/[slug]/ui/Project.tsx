'use client'

import Heading from "../../../../components/Heading"

interface Props {
    content: any;
    slug: string;
}


export default function Project({content, slug} : Props) {


    return (
        <section>
        <Heading title={`Project ${slug}`} backBtn={true} />
        <div dangerouslySetInnerHTML={{ __html: content}}></div>
      </section>
    )
}