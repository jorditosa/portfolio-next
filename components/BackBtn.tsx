"use client"

import { useRouter } from "next/navigation";
import { AiOutlineRollback } from "react-icons/ai";


const BackBtn = () => {
  const router = useRouter()
  return (
    <button
      className='flex-1 flex max-w-12 justify-end text-slate-950 dark:text-slate-50'
      onClick={() => router.back()}>
        <AiOutlineRollback size={40}/>
    </button>
  )
}
export default BackBtn