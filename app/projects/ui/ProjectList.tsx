'use client'

import Link from "next/link";
import { AiOutlineLaptop, AiOutlineMobile, AiOutlineCode } from "react-icons/ai";
import Heading from "../../../components/Heading";

export default function ProjectList() {

    return (
        <nav>

            <ul>
                <Heading title="Fullstack Apps" backBtn={false} />
                <li className="text-xl">
                    <Link href={`/projects/deporunners`} className="flex items-center gap-6 no-underline hover:text-blue-700">
                        <AiOutlineMobile className="w-8 h-8" />
                        Deporunners App
                    </Link>
                </li>
                <li className="text-xl">
                    <Link href={`/projects/takespai`} className="flex items-center gap-6 no-underline hover:text-blue-700">
                        <AiOutlineLaptop className="w-8 h-8" />
                        Takespai Ecommerce
                    </Link>
                </li>
                <li className="text-xl">
                    <Link href={`/projects/cursacolls`} className="flex items-center gap-6 no-underline hover:text-blue-700">
                        <AiOutlineLaptop className="w-8 h-8" />
                        Cursa dels Colls Website
                    </Link>
                </li>

            </ul>

            <ul>
                <Heading title="Personal Scripts" backBtn={false} />


                <li className="text-xl">
                    <Link href={`/projects/network-analyzer`} className="flex items-center gap-6 no-underline hover:text-blue-700">
                        <AiOutlineCode className="w-8 h-8" />
                        Python Network analyzer
                    </Link>
                </li>
            </ul>
        </nav>
    )
}