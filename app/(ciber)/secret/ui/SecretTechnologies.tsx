'use client'

import Heading from "@/components/Heading";
import { SiGnubash, SiHackthebox, SiKalilinux, SiLinux, SiPython, SiServerfault, SiServerless, SiSocketdotio, SiVirtualbox } from "react-icons/si";

export default function SeretTechnologiesPage() {
    return (
        <>
         <Heading title={'Tools and technologies'} backBtn={false}  color="bg-emerald-400"/>
            <div className="flex flex-wrap items-center gap-4 mb-6">
            <SiVirtualbox className="w-10 h-10" title="Javascript" />
            <SiGnubash className="w-10 h-10" title="Gnubash" />
            <SiKalilinux className="w-10 h-10" title="Kalilinux" />
            <SiPython className="w-10 h-10" title="Python" />
            <SiServerfault className="w-10 h-10" title="Serverfault" />
            <SiHackthebox className="w-10 h-10" title="Hackthebox" />
            </div>
        </>
    );
}