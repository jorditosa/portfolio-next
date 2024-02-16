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
      <body className='font-orbitron p-4'>
        <header>
          <NavBar />
        </header>
        <main className='max-w-2xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}