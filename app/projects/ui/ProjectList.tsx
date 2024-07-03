'use client'

import Link from "next/link";
import { AiOutlineLaptop, AiOutlineMobile, AiOutlineCode, AiOutlineArrowRight } from "react-icons/ai";
import Heading from "../../../components/Heading";
import { TiChevronRightOutline } from "react-icons/ti";

const webProjects = [
    { slug: 'deporunners', icon: <AiOutlineMobile className="w-8 h-8" />, name: 'Deporunners App' },
    { slug: 'takespai', icon: <AiOutlineLaptop className="w-8 h-8" />, name: 'Takespai Ecommerce' },
    { slug: 'cursacolls', icon: <AiOutlineLaptop className="w-8 h-8" />, name: 'Cursa dels Colls Website' }
];

const scripts = [
    { slug: 'network-analyzer', icon: <AiOutlineCode className="w-8 h-8" />, name: 'Python Network analyzer' },
   
];


export default function ProjectList() {

    return (
        <>
            <ul>
                <Heading title="Fullstack Apps" backBtn={false} />
                {webProjects.map(project => (
                    <li key={project.slug} className="text-xl flex items-center gap-4">
                        <TiChevronRightOutline size={38} />
                        <Link href={`/project/${project.slug}`} className="flex items-center gap-6 no-underline hover:text-blue-700">
                            {project.icon}
                            {project.name}
                        </Link>
                    </li>
                ))}

            </ul>

            <ul>
                <Heading title="Personal Scripts" backBtn={false} />


                {scripts.map(script => (
                    <li key={script.slug} className="text-xl flex items-center gap-4">
                        <TiChevronRightOutline size={38} />
                        <Link href={`/${script.slug}`} className="flex items-center gap-6 no-underline hover:text-blue-700">
                            {script.icon}
                            {script.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}