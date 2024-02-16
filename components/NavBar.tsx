'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function NavBar() {
  const searchValues: ReadonlyURLSearchParams = useSearchParams()
  const modeParams = searchValues.get('mode')
  const { replace } = useRouter();
  const pathname = usePathname();

  
  const handleMode = () => {
    if( modeParams === 'dark' ) {
      replace(`${pathname}?mode=light`)
    }
    if( modeParams === 'light' || !modeParams) {
      replace(`${pathname}?mode=dark`)
    }
  }

  return (
    <nav className="mt-2 mb-8 max-w-2xl mx-auto bg-orange-50/10 border-2 border-orange-200 shadow-lg rounded-full">
      <ul className="flex justify-around items-center">
        <li className="py-2">
          <Link href='/'
          className="text-orange-800">Hello!</Link>
        </li>
        <li className="py-2">
          <Link href='/background'>Career</Link>
        </li>
        <li className="py-2">
          <Link href='./studies'>Studies</Link>
        </li>
        <li className="py-2 pe-12 border-r-2 border-orange-200 rounded-full">
          <Link href='/projects'>Personal work</Link>
        </li>
        <li className="py-2">
          <button 
            onClick={handleMode}
          >
            {
              modeParams === 'dark' ? <MoonIcon className="w-7 h-7" /> : <SunIcon className="w-7 h-7" />
            }
          </button>
        </li>
      </ul>
    </nav>
  )
}