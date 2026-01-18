import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

useEffect(()=>{
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
     setTheme(theme||(prefersDarkMode ? 'dark' :light)) 
   },[])

  useEffect(()=>{
  if(theme === 'dark'){
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')
  }

  localStorage.setItem('theme',theme)
},  [theme])

  return (
    <button className="cursor-pointer">
      {theme === 'dark' ? (
        <img
          src={assets.sun_icon}
          onClick={() => setTheme('light')}
          className="w-8 h-8 p-1.5 border border-gray-500 rounded-full"
          alt="sun icon"
        />
      ) : (
        <img
          src={assets.moon_icon}
          onClick={() => setTheme('dark')}
          className="w-8 h-8 p-1.5 border border-gray-500 rounded-full"
          alt="moon icon"
        />
      )}
    </button>
  )
}

export default ThemeToggleBtn
