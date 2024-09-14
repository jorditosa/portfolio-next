'use client'

import { fascinate } from "@/app/fonts";
import TypeWriter from "@/components/TypeWritter";

export default function Cover() {
    return (
        <>
            <h1 className={`${fascinate.className} absolute top-2 left-2 text-xl uppercase`}>
                Jordi Sánchez
            </h1>
        <TypeWriter delay={1000}>
            <div className="min-h-screen flex justify-center items-center">
            <h2 className={`${fascinate.className} text-center text-5xl md:text-8xl text-slate-950 dark:text-white font-orbitron font-bold drop-shadow-2xl shadow-blue-500 hover:animation-pulse transition-all duration-150 leading-[80px] md:leading-[200px]`}>Web developer and blue teamer</h2>
            </div>
        </TypeWriter>
        </>
    );
}