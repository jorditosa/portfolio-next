"use client"

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";


const BackBtn = () => {
  const router = useRouter()
  return (
    <button
      className='flex-1 flex justify-end text-slate-950 dark:text-slate-50'
      onClick={() => router.back()}>
        <ArrowUturnLeftIcon className="w-10" />
    </button>
  )
}
export default BackBtn