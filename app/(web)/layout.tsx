import { ReactNode } from "react"
import '@/app/globals.css'
import type { Metadata } from "next";
import { roboto } from "@/app/fonts";
import NavBar from "./ui/navbar/NavBar";
import Footer from "./ui/footer/Footer";
import SmoothScroll from "./ui/SmoothScroll";

interface LayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Welcome! Jordi's Portfolio",
    description: "Personal portfolio from a passionate web developer",
};

export default function WebLayout({ children }: LayoutProps) {

    return (
        <main className={`${roboto.className} font-orbitron dark:bg-slate-950 text-slate-950 dark:text-slate-50 leading-8`}>
            <SmoothScroll>

            <NavBar />
            <div className=" max-w-4xl mx-auto min-h-screen px-4 pt-20">
                {children}
            </div>

            {/*
            <!-- Ohhhhh visit "/secret" if you are looking for my other professional profile, cibersecurity -->
            */}

            <Footer />

            </SmoothScroll>

        </main>
    )
}