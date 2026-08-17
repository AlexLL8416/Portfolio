import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CanvasBackground from './components/ui/CanvasBackground'
import Hero from './components/sections/Hero'
import Navbar from './components/layout/Navbar'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CanvasBackground/>

      <Navbar/>

      <main className='w-full flex flex-col items-center'>
        <Hero/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Education/>
        <Contact/>
      </main>

      <footer className="w-full py-8 text-center relative z-10 border-t border-surfaceBorder/50 bg-[#0F172A]/80 backdrop-blur-sm mt-auto">
        <p className="text-secondary font-mono text-sm">
          &copy; {new Date().getFullYear()} Diseñado y desarrollado por Alejandro Lara Lara.
        </p>
      </footer>
    </>
  )
}

export default App
