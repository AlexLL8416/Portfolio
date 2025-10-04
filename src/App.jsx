import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './componets/ProfileCard'
import avatar from "./assets/avatar.png";
import LightRays from './componets/LightRays.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-containerr'>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffffff"
        raysSpeed={0.5}
        lightSpread={0.8}
        rayLength={2}
        fadeDistance={2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
      />
      <Inicio />
    </div>
  )
}

function Inicio(){
  return (
    <div className='containerInicio'>
      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
    </div>
  )
}


function LeftPanel(){
  return(
    <div className='left'>
        <ProfileCard
          avatarUrl={avatar}
          miniAvatarUrl={avatar}
          name="Alejandro Lara"
          title="Software Engineer"
          handle="AlexLL8416"
          status="Online"
        />
    </div>
  )
}

function RightPanel(){
  return(
    <div className='right'>
      <h2>
        <p>
          Soy Alejandro Lara Lara, un estudiante de
        </p>
      </h2>
    </div>
  )
}

export default App

