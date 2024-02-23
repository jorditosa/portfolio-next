import { ReactNode } from "react"
import { orbitron } from '../app/fonts'
import NavBar from '../components/NavBar'
import './globals.css'

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps)  {

  return (
    <html lang="ca" className={orbitron.variable}>
      <body className='font-orbitron  bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-50'>
        <header>
          <NavBar />
        </header>
        <main className='px-4 md:p-0 max-w-2xl mx-auto prose dark:prose-invert'>
          {children}
        </main>
      </body>
    </html>
  )
}