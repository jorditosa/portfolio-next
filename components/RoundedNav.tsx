"use client"

const RoundedNav = ({children}) => {
  return (
    <nav className="fixed mb-8 h-screen mx-auto w-full overflow-hidden">
      {children}
    </nav>
  )
}
export default RoundedNav