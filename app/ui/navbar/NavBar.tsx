import { AiOutlineHome, AiOutlineLaptop, AiOutlineRead, AiOutlineSnippets, AiOutlineTranslation } from "react-icons/ai";

import { getServerSession } from "next-auth";
import Link from "next/link";
import RoundedNav from "../../../components/RoundedBox";
import ThemeToggle from "../../../components/ThemeToggle";

export default async function NavBar() {

  return (
    <RoundedNav>
      <ul className="w-full h-48 flex font-semibold text-xs lg:text-xl overflow-hidden">
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-blue-500 dark:to-slate-950 hover:text-xl transition-all duration-100 ease-linear">
          <Link href='/' className='h-full flex flex-col items-center justify-end gap-12'>
            <p className='-rotate-6'>Hello!</p>
            <AiOutlineHome size={30} />
          </Link>

        </li>
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-blue-500/80 dark:to-slate-950 hover:text-xl transition-all duration-100 ease-linear">
          <Link href='/background' className='h-full flex flex-col items-center justify-end gap-12'>
            <p className='-rotate-6'>Career</p>
            <AiOutlineLaptop size={30} />
          </Link>
        </li>
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-blue-500/70 dark:to-slate-950 hover:text-xl transition-all duration-100 ease-linear">
          <Link href='./studies' className='h-full flex flex-col items-center justify-end gap-12'>
            <p className='-rotate-6'>Studies</p>
            <AiOutlineRead size={30} />
          </Link>
        </li>
        <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-blue-500/60 dark:to-slate-950 hover:text-xl transition-all duration-100 ease-linear">
          <Link href='/projects' className='h-full flex flex-col items-center justify-end gap-12'>
            <p className='-rotate-6'>Projects</p>
            <AiOutlineSnippets size={30} />
          </Link>
        </li>
        {/* {
          session ?
            <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-slate/50 dark:to-slate-950 hover:text-xl transition-all duration-100 ease-linear">
              <Link href='/api/auth/signout' className='h-full flex flex-col items-center justify-end gap-12'>
                <p className='-rotate-6'>Logout</p>
                <AiOutlineLogout size={30} />
              </Link>
            </li>
            :
            <li className="py-2 flex-1 cursor-pointer gap-12 text-lg bg-gradient-to-t from-slate/50 dark:to-slate-950 hover:text-xl transition-all duration-100 ease-linear">
              <Link href='/api/auth/signin' className='h-full flex flex-col items-center justify-end gap-12'>
                <p className='-rotate-6'>Login</p>
                <AiOutlineLogin size={30} />
              </Link>
            </li>
        } */}
        <li className="h-full py-2 flex-1 gap-4 cursor-pointer text-lg bg-gradient-to-t from-blue-500/25 dark:to-slate-950 hover:text-xl transition-all duration-100 ease-linear flex flex-col md:flex-row items-center justify-end md:justify-center">
          <ThemeToggle />
          <AiOutlineTranslation size={40} className="cursor-pointer" />

        </li>
      </ul>
    </RoundedNav>
  )
}