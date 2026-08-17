import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CanvasBackground from './components/ui/CanvasBackground'
import Hero from './components/sections/Hero'
import Navbar from './components/layout/Navbar'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CanvasBackground/>

      <Navbar/>

      <main className='w-full flex flex-col items-center'>
        <Hero/>
        <Skills/>
        <Certifications/>
      </main>
    </>
  )
}

export default App
