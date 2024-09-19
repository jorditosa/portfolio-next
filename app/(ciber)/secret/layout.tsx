import { ReactNode } from "react"
import '@/app/globals.css'
import type { Metadata } from "next";
import { ubuntu } from "@/app/fonts";

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Welcome! Jordi's Portfolio",
  description: "Personal portfolio from a passionate web developer",
};

export default function CiberLayout({ children }: LayoutProps) {

  return (
      <main className={`${ubuntu.style.fontFamily} font-orbitron bg-stone-950 text-emerald-400 min-h-screen`}>

        <div className="max-w-4xl mx-auto py-10 px-4">
          {children}
        </div>

      </main>
  )
}