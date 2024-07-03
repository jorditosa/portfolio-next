import { ReactNode } from "react"
import { roboto } from '../app/fonts'
import NavBar from "./ui/navbar/NavBar"
import './globals.css'
import Footer from "./ui/footer/Footer"

interface LayoutProps {
  children: ReactNode
}

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