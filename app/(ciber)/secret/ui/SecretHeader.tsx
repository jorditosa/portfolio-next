'use client'

import { TerminalSecurity } from "@/app/(web)/ui/terminal/TerminalSecurity";
import Heading from "@/components/Heading";
import TypeWriter from "@/components/TypeWritter"
import Markdown from "markdown-to-jsx";

export default function SecretHeaderPage({content}) {
    return (
        <>
        <Heading title='Security career' backBtn={true} color="bg-emerald-400" />

        <TerminalSecurity />
        {/* <Markdown
            options={{ 
            overrides: {
                TypeWriter: {
                    component: TypeWriter
                }
            } }}>
            {content}
        </Markdown> */}
        </>
    );
}