'use client'

import { fascinate } from "@/app/fonts";
import TypeWriter from "@/components/TypeWritter";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import loading from "../../../public/loffties/loading.json";
import LottieHome from "./LottieHome";


export default function Cover() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            {
                loaded ? (
                    <div className="min-h-screen">
                        <LottieHome />

                        <h1 className={`${fascinate.className} absolute top-2 left-2 text-xl uppercase`}>
                            Jordi Sánchez
                        </h1>
                        <div className="flex justify-center items-center">
                            <h2 className={`${fascinate.className} text-center text-5xl md:text-8xl text-slate-950 dark:text-white font-orbitron font-bold drop-shadow-2xl shadow-blue-500 hover:animation-pulse transition-all duration-[6s] leading-[80px] md:leading-[200px]`}>Web developer and blue teamer</h2>
                        </div>
                    </div>

                ) : (
                    <div id="banner" className='w-full min-h-screen flex justify-center items-center'>
                        <div className="flex justify-center">
                            <Lottie animationData={loading} style={{ width: "60px" }} loop />
                        </div>
                    </div>
                )
            }
        </>
    );
}