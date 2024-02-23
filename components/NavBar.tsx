'use client'

import Link from "next/link";
import RoundedNav from "./RoundedBox";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {

  return (
    <RoundedNav>
      <ul className="flex justify-around items-center font-semibold text-xs lg:text-xl">
        <li className="py-2">
          <Link href='/'>Hello!</Link>
        </li>
        <li className="py-2">
          <Link href='/background'>Career</Link>
        </li>
        <li className="py-2">
          <Link href='./studies'>Studies</Link>
        </li>
        <li className="py-2">
          <Link href='/projects'>Personal work</Link>
        </li>
        <ThemeToggle />
      </ul>
    </RoundedNav>
  )
}