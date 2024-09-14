'use client'
import React, { useEffect } from 'react'
import { animateFadeOut, animatePageIn } from '../../lib/animations'
import { usePathname, useRouter } from 'next/navigation'
import Lottie from 'lottie-react'
import loading from "../../public/loffties/loading.json";


function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        animateFadeOut(pathname, router)

        animatePageIn()
    }, [pathname, router])

    return (
        <div>
            <div id="banner" className='w-screen min-h-screen bg-gradient-to-t from-blue-900 via-blue-700 to-neutral-900 z-50 fixed top-0 left-0 flex justify-center items-center'>
                <div className="flex justify-center">
                    <Lottie animationData={loading} style={{ width: "320px" }} loop />
                </div>
            </div>
            {children}
        </div>
    )
}

export default Template