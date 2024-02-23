import { ArrowLeftEndOnRectangleIcon, ArrowLeftStartOnRectangleIcon, BookOpenIcon, BuildingOfficeIcon, HomeIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { options } from "../app/api/auth/[...nextauth]/options";
import RoundedNav from "./RoundedBox";
import ThemeToggle from "./ThemeToggle";

export default async function NavBar() {
  const session = await getServerSession(options)

  return (
    <RoundedNav>
      <ul className="h-48 flex font-semibold text-xs lg:text-xl">
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-customRed dark:to-slate-950 hover:text-2xl transition-all duration-100 ease-linear">
          <Link href='/' className='h-full flex flex-col items-center justify-end gap-12'>
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
        {
          session ?
            <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-customRed dark:to-slate-950 hover:text-2xl transition-all duration-100 ease-linear">
              <Link href='/api/auth/signout' className='h-full flex flex-col items-center justify-end gap-12'>
                <p className='-rotate-90'>Logout</p>
                <ArrowLeftStartOnRectangleIcon className="w-10" />
              </Link>
            </li>
            :
            <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-customRed dark:to-slate-950 hover:text-2xl transition-all duration-100 ease-linear">
              <Link href='/api/auth/signin' className='h-full flex flex-col items-center justify-end gap-12'>
                <p className='-rotate-90'>Login</p>
                <ArrowLeftEndOnRectangleIcon className="w-10" />
              </Link>
            </li>
        }
      </ul>
    </RoundedNav>
  )
}