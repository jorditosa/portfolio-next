"use client"

import BackBtn from "./BackBtn"

interface Props {
  title: string,
  backBtn: boolean
}

export default function Heading({title, backBtn}: Props) {

  return (
    <h1 className="flex items-center w-full text-xl md:text-4xl py-4">
      {title}
      <span className="h-2 ms-4 flex-1 bg-blue-500 rounded-l-lg"></span>
      {
        backBtn && <BackBtn />
      }
    </h1>
  )
}