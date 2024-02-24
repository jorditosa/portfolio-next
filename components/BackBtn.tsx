"use client"

import { useRouter } from "next/navigation";
import { AiOutlineRollback } from "react-icons/ai";


const BackBtn = () => {
  const router = useRouter()
  return (
    <button
      className='flex-1 flex justify-end text-slate-950 dark:text-slate-50'
      onClick={() => router.back()}>
        <AiOutlineRollback className="w-10" />
    </button>
  )
}
export default BackBtn