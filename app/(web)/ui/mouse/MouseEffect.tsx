'use client'

import { useEffect } from "react";
import { gsap } from "gsap";

export default function MouseEffect() {

    useEffect(() => {
        gsap.set(".ball", { xPercent: -50, yPercent: -50 });
        let targets = gsap.utils.toArray(".ball");
        window.addEventListener("mousemove", (e) => {
          gsap.to(targets, {
            duration: 0.5,
            x: e.clientX,
            y: e.clientY,
            ease: "power1.out",
            overwrite: "auto",
            stagger: 0.02
          });
        });
      }, []);

    return (
        <>
        <div className="min-h-screen bg-black">
          <div className="ball bg-gradient-to-r from-blue-400 via-blue-800 to-slate-900 w-10 h-10 fixed top-0 left-0 rounded-full"></div>
        </div>
      </>
    );
}