"use client"
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const { replace } = useRouter();
  const pathname = usePathname();



  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
    replace(`${pathname}?theme=${theme}`)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      replace(`${pathname}?theme=dark`)
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
      replace(`${pathname}?theme=light`)

    }
  }, [darkMode])

  return (
    <li className="py-2 flex-1 cursor-pointer flex items-center justify-center bg-gradient-to-t from-customRed/50 dark:to-slate-950">
      <button
        className='h-full'
        onClick={() => setDarkMode(!darkMode)}
      >
        {
          darkMode ? <FaRegMoon size={30} title='dark' /> : <FaRegSun size={30} title='light' />
        }
      </button>
    </li>
  )
}
export default ThemeToggle