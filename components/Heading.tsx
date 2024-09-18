"use client"

import BackBtn from "./BackBtn"
import FadeLateralAnimation from "./animations/fade-lateral/FadeLateralAnimation";

interface Props {
  title: string;
  backBtn: boolean;
  color?: string;
}

export default function Heading({title, backBtn, color="bg-blue-500"}: Props) {

  return (
    <FadeLateralAnimation>
      <h1 className="flex items-center w-full text-xl md:text-4xl py-4 md:py-8 font-bold">
        {title}
        <span className={`h-1 ms-4 flex-1 ${color}`}></span>
        {
          backBtn && <BackBtn color={color} />
        }
      </h1>
    </FadeLateralAnimation>
  )
}