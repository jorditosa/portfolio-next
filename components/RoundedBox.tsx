"use client"

const RoundedNav = ({children}) => {
  return (
    <nav className="mt-2 mb-8 max-w-2xl mx-auto bg-orange-50/10 border-4 border-customRed rounded-full">
      {children}
    </nav>
  )
}
export default RoundedNav