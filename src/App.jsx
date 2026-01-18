import React, { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  // cursor refs
  const outlineRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e

      if (dotRef.current) {
        dotRef.current.style.left = clientX + 'px'
        dotRef.current.style.top = clientY + 'px'
      }

      if (outlineRef.current) {
        outlineRef.current.style.left = clientX + 'px'
        outlineRef.current.style.top = clientY + 'px'
      }
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />

      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <ContactUs />
      <Footer theme={theme} />

      {/* cursor outline */}
      <div
        ref={outlineRef}
        className="fixed w-10 h-10 border border-primary
        rounded-full pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2"
      />

      {/* cursor dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-primary rounded-full
        pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

export default App
