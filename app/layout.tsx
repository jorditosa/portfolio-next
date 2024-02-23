import { orbitron } from '@/app/fonts'
import '@/app/globals.css'
import NavBar from "@/components/NavBar"
import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps)  {

  return (
    <html lang="ca" className={orbitron.variable}>
      <body className='font-orbitron p-4 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50'>
        <header>
          <NavBar />
        </header>
        <main className='max-w-2xl mx-auto prose dark:prose-invert'>
          {children}
        </main>
      </body>
    </html>
  )
}