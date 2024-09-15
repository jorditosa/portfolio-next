'use client'

import Heading from "@/components/Heading";
import Link from "next/link";
import { AiOutlineLaptop, AiOutlineMobile, AiOutlineCode, AiOutlineArrowRight } from "react-icons/ai";
import { TiChevronRightOutline } from "react-icons/ti";

const webProjects = [
    { slug: 'deporunners', icon: <AiOutlineMobile className="w-8 h-8" />, name: 'Deporunners App' },
    { slug: 'takespai', icon: <AiOutlineLaptop className="w-8 h-8" />, name: 'Takespai Ecommerce' },
    { slug: 'cursacolls', icon: <AiOutlineLaptop className="w-8 h-8" />, name: 'Cursa dels Colls Website' }
];

const scripts = [
    { slug: 'network-analyzer', icon: <AiOutlineCode className="w-8 h-8" />, name: 'Python Network analyzer' },
    { slug: 'openai', icon: <AiOutlineCode className="w-8 h-8" />, name: 'OpenAI chatbot with gpt-3.5' },
];


export default function ProjectList() {

    return (
        <>
            <ul className="p-0">
                <Heading title="Fullstack Apps" backBtn={false} />
                <p>Here some web development projects, including client and server sides development.</p>
                {webProjects.map(project => (
                    <li key={project.slug} className="text-xl flex items-center gap-4">
                        <TiChevronRightOutline size={30} />
                        <Link href={`/project/${project.slug}`} className="flex items-center gap-6 no-underline hover:text-blue-600 transition-all duration-150 text-sm md:text-base">
                            {project.icon}
                            {project.name}
                        </Link>
                    </li>
                ))}

            </ul>

            <ul className="p-0">
                <Heading title="Personal Scripts" backBtn={false} />
                <p>Here you are some scripts, based on class and functions, developed with python and proper conda environments.</p>


                {scripts.map(script => (
                    <li key={script.slug} className="text-xl flex items-center gap-4">
                        <TiChevronRightOutline size={30} />
                        <Link href={`/project/${script.slug}`} className="flex items-center gap-6 no-underline hover:text-blue-600 transition-all duration-150 text-sm md:text-base">
                            {script.icon}
                            {script.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}