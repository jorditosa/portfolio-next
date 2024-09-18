'use client'

import FadeUpAnimation from "@/components/animations/FadeUpAnimation";
import Markdown from "markdown-to-jsx";

export default function HomeBody({content}) {
    return (
        <FadeUpAnimation>
            <Markdown>
            {content}
            </Markdown>
        </FadeUpAnimation>
    );
}