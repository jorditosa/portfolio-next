"use client"
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    <li className="h-100 py-1 flex items-center px-4 bg-gradient-to-b from-customRed to-white">
      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        {
          darkMode ? <MoonIcon className="w-10 h-full" title='dark' /> : <SunIcon className="w-10 h-full" title='light' />
        }
      </button>
    </li>
  )
}
export default ThemeToggle