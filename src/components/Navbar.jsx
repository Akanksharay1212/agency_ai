import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='logo'
      />

      {/* Sidebar / Menu */}
      <div className={`text-gray-700 dark:text-white sm:text-sm
        max-sm:w-60 max-sm:pl-10 max-sm:bg-primary max-sm:text-white
        max-sm:pt-20 flex sm:items-center gap-5 transition-all
        fixed sm:static top-0 bottom-0
        ${sidebarOpen ? 'left-0' : '-left-full'}`}>

<ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Close Icon */}
        <img
          src={assets.close_icon}
          alt="close icon"
          className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer'
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href='#' className='sm:hover:border-b'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href='#services' className='sm:hover:border-b'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href='#our-work' className='sm:hover:border-b'>Our Work</a>
        <a onClick={() => setSidebarOpen(false)} href='#contact-us' className='sm:hover:border-b'>Contact Us</a>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-4'>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="menu icon"
          className='w-8 sm:hidden cursor-pointer'
          onClick={() => setSidebarOpen(true)}
        />

        {/* Desktop Connect Button */}
        <div className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform'>
          <a href='#contact-us' className='flex items-center gap-2'>
            Connect
            <img src={assets.arrow_icon} width={14} alt='arrow' />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Navbar
