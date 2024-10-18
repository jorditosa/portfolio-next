'use client'

import { fascinate } from "@/app/fonts";
import TypeWriter from "@/components/TypeWritter";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import loading from "../../../../public/loffties/loading.json";
import FadeUpAnimation from "@/components/animations/fade-up/FadeUpAnimation";
import FadeLateralAnimation from "@/components/animations/fade-lateral/FadeLateralAnimation";
import LottieHome from "./LottieHome";
import { TerminalCover } from "../terminal/TerminalCover";


export default function Cover() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            {
                loaded ? (
                    <div className="min-h-screen flex flex-col gap-10 justify-center">

                        <div className="absolute top-0 left-0">
                            <FadeLateralAnimation>
                                <h1 className={`${fascinate.className}  text-xl px-3 md:px-6`}>
                                    Jordi Sánchez
                                </h1>
                            </FadeLateralAnimation>
                        </div>


                        <div className="flex justify-center items-center">
                            <FadeUpAnimation>
                                <h2 className={`${fascinate.className} text-center text-4xl md:text-7xl text-slate-950 dark:text-white font-orbitron font-bold drop-shadow-2xl shadow-blue-500 hover:animation-pulse transition-all duration-[6s] leading-[60px] md:leading-[160px]`}>Web developer <br/> Cybersecurity <br/> Hybrid Apps</h2>
                            </FadeUpAnimation>
                        </div>

                        <FadeLateralAnimation>
                            <TerminalCover />
                            {/* <LottieHome /> */}
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