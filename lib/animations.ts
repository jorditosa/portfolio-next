import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
    const banner = document.getElementById("banner")


    if ( banner ) {
        const tl = gsap.timeline()

        tl.set(banner, {
            yPercent: 0,
        })
        .to(banner, {
            yPercent: 100,
            delay: 1
        })
    }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const banner = document.getElementById("banner")

    if (banner) {
        const tl = gsap.timeline()

        tl.set(banner, {
            yPercent: -100,
        })
        .to(banner, {
            yPercent: 0,
            onComplete: () => {
                router.push(href)
            }
        })
    }
}

export const animateFadeOut = (href: string, router: AppRouterInstance) => {
    const banner = document.getElementById("banner")

    if (banner) {
        const tl = gsap.timeline()

        tl.set(banner, {
           opacity: 1
        })
        .to(banner, {
            opacity: 0,
            delay: 0.4,
            display: 'none',
            onComplete: () => {
                router.push(href)
            }
        })
    }
}