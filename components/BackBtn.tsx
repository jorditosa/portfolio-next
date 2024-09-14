"use client"

import { useRouter } from "next/navigation";
import { TiChevronLeft } from "react-icons/ti";

interface Props {
  color?: string;
}


const BackBtn = ({ color }: Props) => {
  const router = useRouter()
  return (
    <button
      className={`flex flex-1 items-start h-10 max-w-20 md:max-w-16 z-10 mx-2`}
      onClick={() => router.back()}>
        <div className="relative top-0">
          <span className={`${color} absolute top-0 left-0 px-2 md:px-4 md:py-1 z-0 transition-all duration-150 ease-in hover:top-2 hover:left-2 text-black dark:text-white`}>
            <TiChevronLeft size={30}  />
          </span>
          <span className="absolute top-2 left-2 bg-black dark:bg-white px-2 md:px-4 md:py-1 -z-10">
            <TiChevronLeft size={30} />
          </span>
        </div>
    </button>
  )
}
export default BackBtn