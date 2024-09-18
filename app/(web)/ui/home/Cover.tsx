'use client'

import { fascinate } from "@/app/fonts";
import TypeWriter from "@/components/TypeWritter";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import loading from "../../../../public/loffties/loading.json";
import FadeUpAnimation from "@/components/animations/fade-up/FadeUpAnimation";
import FadeLateralAnimation from "@/components/animations/fade-lateral/FadeLateralAnimation";
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

                        <h1 className={`${fascinate.className} absolute top-2 left-2 text-xl uppercase`}>
                            Jordi Sánchez
                        </h1>
                        <div className="flex justify-center items-center">
                            <FadeUpAnimation>
                                <h2 className={`${fascinate.className} text-center text-5xl md:text-8xl text-slate-950 dark:text-white font-orbitron font-bold drop-shadow-2xl shadow-blue-500 hover:animation-pulse transition-all duration-[6s] leading-[60px] md:leading-[160px]`}>Web developer and blue teamer</h2>
                            </FadeUpAnimation>
                        </div>
                        <FadeLateralAnimation>
                            <LottieHome />
                        </FadeLateralAnimation>
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