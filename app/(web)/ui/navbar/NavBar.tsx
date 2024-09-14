'use client'

import { AiFillCloseCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineHome, AiOutlineLaptop, AiOutlineMenu, AiOutlineRead, AiOutlineSnippets } from "react-icons/ai";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import RoundedNav from "@/components/RoundedNav";
import { fascinate } from "@/app/fonts";

export default function NavBar() {
  const [openedMenu, setOpenedMenu] = useState(false)

  return (
    <>

      {

        openedMenu ? (
          <button
            className="text-white absolute top-2 right-2 z-50 hover:translate-y-1 transition-all duration-150"
            onClick={() => setOpenedMenu(false)}
          >
            <AiOutlineClose size={40} className="text-slate-900 dark:text-white" />
          </button>
        ) : (
          <button
            className="text-white absolute top-2 right-2 z-50 hover:translate-y-1 transition-all duration-150"
            onClick={() => setOpenedMenu(true)}
          >
            <AiOutlineMenu size={40} className="text-slate-900 dark:text-white" />
          </button>
        )
      }

          <nav className={`${ openedMenu ? 'z-40' : 'z-[-1]'} ${fascinate.className} absolute left-0  mb-8 h-screen w-full transition-all duration-[1s] ease-in-out`}>
            <ul className="w-full h-screen flex text-xs lg:text-4xl overflow-hidden">
              <li className={`${ openedMenu ? 'top-[0]' : '-top-[100%]'} relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-b from-blue-600 to-blue-100 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-300 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-white duration-[0.2s] ease-linear`}>
                <Link 
                href='/' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'
                onClick={() => setOpenedMenu(false)}
                >
                  <p className='-rotate-12'>Hello!</p>
                  <AiOutlineHome size={42} className="z-20" />
                </Link>

              </li>
              <li className={`${ openedMenu ? 'top-[0]' : '-top-[100%]'} relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-b from-blue-600 to-blue-100 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-300 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-white duration-[0.4s] ease-linear`}>
                <Link 
                href='/background' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'
                onClick={() => setOpenedMenu(false)}
                >
                  <p className='-rotate-12'>Career</p>
                  <AiOutlineLaptop size={42} className="z-20" />
                </Link>
              </li>
              <li className={`${ openedMenu ? 'top-[0]' : '-top-[100%]'} relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-b from-blue-600 to-blue-100 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-300 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-white duration-[0.6s] ease-linear`}>
                <Link 
                onClick={() => setOpenedMenu(false)}
                href='./studies' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'>
                  <p className='-rotate-12'>Studies</p>
                  <AiOutlineRead size={42} className="z-20" />
                </Link>
              </li>
              <li className={`${ openedMenu ? 'top-[0]' : '-top-[100%]'} relative py-2 flex-1 cursor-pointer gap-8 bg-gradient-to-b from-blue-600 to-blue-100 before:absolute before:bg-blue-900 before:w-full before:h-full before:-top-[100%] before:duration-300 before:ease-in transition-all before:hover:top-0 before:z-0 hover:text-white duration-[0.8s] ease-linear`}>
                <Link 
                onClick={() => setOpenedMenu(false)}
                href='/projects' className='absolute h-full w-full flex flex-col items-center justify-center gap-8'>
                  <p className='-rotate-12'>Projects</p>
                  <AiOutlineSnippets size={42} className="z-20" />
                </Link>
              </li>

              <li 
              onClick={() => setOpenedMenu(false)}
              className={`${ openedMenu ? 'top-[0]' : '-top-[100%]'} relative h-full w-full py-2 flex-1 cursor-pointer bg-gradient-to-b from-blue-600 to-blue-100 duration-[1s] ease-linear flex flex-col items-center justify-center gap-8`}>
                <p className='-rotate-12'>Theme</p>
                <ThemeToggle />
                {/* <LanguageToggle /> */}
              </li>
            </ul>
          </nav>





    </>
  )
}