"use client"

import { useRouter } from "next/navigation";
import { TiChevronLeft } from "react-icons/ti";


const BackBtn = () => {
  const router = useRouter()
  return (
    <button
      className='flex-1 flex max-w-20 justify-center text-slate-950 dark:text-slate-50 border-4 border-blue-500 rounded-full'
      onClick={() => router.back()}>
        <TiChevronLeft size={40}/>
    </button>
  )
}
export default BackBtn