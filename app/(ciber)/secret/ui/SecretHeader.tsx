'use client'

import Heading from "@/components/Heading";
import TypeWriter from "@/components/TypeWritter"

export default function SecretHeaderPage() {
    return (
        <>
        <Heading title='Security career' backBtn={true} color="bg-emerald-400" />
        <TypeWriter delay={500}>
            <h1 className="text-2xl font-bold">Hi!</h1>
        </TypeWriter>
        <TypeWriter delay={1000}>
            <p>Willing to grow as a blue team member.</p>
        </TypeWriter>

        </>
    );
}