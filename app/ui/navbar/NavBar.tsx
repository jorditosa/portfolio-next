import { AiOutlineHome, AiOutlineLaptop, AiOutlineRead, AiOutlineSnippets } from "react-icons/ai";

import Link from "next/link";
import RoundedNav from "../../../components/RoundedBox";
import ThemeToggle from "../../../components/ThemeToggle";
import LanguageToggle from "../../../components/LanguageToggle";

export default async function NavBar() {

  return (
    <RoundedNav>
      <ul className="w-full h-48 flex font-semibold text-xs lg:text-xl overflow-hidden">
        <li className="relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-t from-blue-500 dark:to-slate-950 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-200 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-xl hover:text-white duration-100 ease-linear">
          <Link href='/' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'>
            <p className='-rotate-6'>Hello!</p>
            <AiOutlineHome size={42} className="z-20" />
          </Link>

        </li>
        <li className="relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-t from-blue-500/80 dark:to-slate-950 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-200 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-xl hover:text-white duration-100 ease-linear">
          <Link href='/background' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'>
            <p className='-rotate-6'>Career</p>
            <AiOutlineLaptop size={42} className="z-20" />
          </Link>
        </li>
        <li className="relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-t from-blue-500/60 dark:to-slate-950 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-200 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-xl hover:text-white duration-100 ease-linear">
          <Link href='./studies' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'>
            <p className='-rotate-6'>Studies</p>
            <AiOutlineRead size={42} className="z-20" />
          </Link>
        </li>
        <li className="relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-t from-blue-500/40 dark:to-slate-950 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-200 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-xl hover:text-white duration-100 ease-linear">
          <Link href='/projects' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'>
            <p className='-rotate-6'>Projects</p>
            <AiOutlineSnippets size={42} className="z-20" />
          </Link>
        </li>
        
        <li className="h-full w-full py-2 flex-1 cursor-pointer bg-gradient-to-t from-blue-950/25 dark:to-slate-950 hover:text-xl duration-100 ease-linear flex flex-col items-center justify-center gap-8">
          <p className='-rotate-6'>Theme</p>
          <ThemeToggle />
          {/* <LanguageToggle /> */}
        </li>
      </ul>
    </RoundedNav>
  )
}