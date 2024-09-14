import { ReactNode } from "react"
import './globals.css'
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
    <html lang="ca" >
      <body className="min-h-screen">
          {children}
      </body>
    </html>
  )
}