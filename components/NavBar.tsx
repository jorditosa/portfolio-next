import { MoonIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function NavBar() {
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
          <Link href='#'>
            {
              <MoonIcon className="w-6 h-6" />
            }
          </Link>
        </li>
      </ul>
    </nav>
  )
}