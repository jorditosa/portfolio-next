'use client'

import { TerminalSecurity } from "@/app/(web)/ui/terminal/TerminalSecurity";
import Heading from "@/components/Heading";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default function SecretFooterPage({ content }) {
    return (
        <section className="py-4">

            <Markdown>
                {content}
            </Markdown>

            <div className="relative mt-4 w-full h-full text-center border-2 border-emerald-500 overflow-hidden before:absolute before:bg-gradient-to-r before:from-emerald-500 before:via-transparent before:to-emerald-500 before:w-full before:h-full before:left-full before:transition-transform before:duration-300 before:ease-in-out hover:text-white hover:before:translate-x-[-100%] hover:cursor-pointer">
                <Link 
                href={'/'}
                className="block w-full h-full uppercase p-4 z-50">
                    Go Home
                </Link>
            </div>

        </section>
    );
}