"use client"

import BackBtn from "./BackBtn"

export default function Heading({children}) {

  return (

    <h1 className="flex items-center w-full">
      {children}
      <span className="h-2 mx-4 flex-1 bg-customRed"></span>
      <BackBtn />
    </h1>
  )
}