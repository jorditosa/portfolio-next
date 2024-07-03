"use client"

import BackBtn from "./BackBtn"

export default function Heading({children}) {

  return (

    <h1 className="flex items-center w-full text-xl md:text-4xl">
      {children}
      <span className="h-2 mx-4 flex-1 bg-blue-500"></span>
      <BackBtn />
    </h1>
  )
}