"use client"

import useUIStore from '@/store/ui-store';
import React from 'react';
import { FaRegMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme } = useUIStore();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark')
    }
  };


  return (
    <div className='absolute h-full w-full flex flex-col items-center justify-center gap-8'>
      <p className='-rotate-6'>Theme</p>
      <button
        onClick={toggleTheme}
        className='w-full h-12 flex justify-center items-center relative'
      >
        {
          theme === 'light' ? <FaRegMoon size={30} title='dark' /> : <FaSun size={30} title='light' />
        }
      </button>
    </div>

  )
}
export default ThemeToggle