import { ReactNode } from "react"
import { roboto } from '../app/fonts'
import NavBar from "./ui/navbar/NavBar"
import './globals.css'
import Footer from "./ui/footer/Footer"
import type { Metadata } from "next";

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Welcome! Jordi's Portfolio",
  description: "Personal portfolio from a passionate web developer",
};

export default function RootLayout({ children }: LayoutProps) {

  return (
    <html lang="ca" className={roboto.style.fontFamily}>
      <body className='font-orbitron  bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50'>
        <NavBar />
        <main className='px-4 md:p-0 max-w-4xl mx-auto prose dark:prose-invert'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}