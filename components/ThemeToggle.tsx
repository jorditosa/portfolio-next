"use client"
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaRegMoon, FaSun } from "react-icons/fa";

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
      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        {
          darkMode ? <FaRegMoon size={30} title='dark' /> : <FaSun size={30} title='light' />
        }
      </button>
  )
}
export default ThemeToggle