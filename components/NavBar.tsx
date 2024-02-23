'use client'

import { BookOpenIcon, BuildingOfficeIcon, HomeIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import RoundedNav from "./RoundedBox";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {

  return (
    <RoundedNav>
      <ul className="h-48 flex font-semibold text-xs lg:text-xl">
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-customRed dark:to-slate-950 hover:text-2xl transition-all duration-100 ease-linear">
          <Link href='/' className='h-full flex flex-col items-center justify-end gap-12'  >
             <p className='-rotate-90'>Hello!</p>
             <HomeIcon className="w-10" />
          </Link>
         
        </li>
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-customRed/80 dark:to-slate-950 hover:text-2xl transition-all duration-100 ease-linear">
          <Link href='/background' className='h-full flex flex-col items-center justify-end gap-12'>
             <p className='-rotate-90'>Career</p>
            <BuildingOfficeIcon className="w-10" />
          </Link>
        </li>
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-customRed/70 dark:to-slate-950 hover:text-2xl transition-all duration-100 ease-linear">
          <Link href='./studies' className='h-full flex flex-col items-center justify-end gap-12'>
              <p className='-rotate-90'>Studies</p>
            <BookOpenIcon className="w-10" />
          </Link>
        </li>
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-customRed/60 dark:to-slate-950 hover:text-2xl transition-all duration-100 ease-linear">
          <Link href='/projects' className='h-full flex flex-col items-center justify-end gap-12'>
             <p className='-rotate-90'>Personal projects</p>
            <PresentationChartBarIcon className="w-10" />
          </Link>
        </li>
        <ThemeToggle />
      </ul>
    </RoundedNav>
  )
}