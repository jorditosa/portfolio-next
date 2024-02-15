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
      <body className='font-orbitron'>
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}