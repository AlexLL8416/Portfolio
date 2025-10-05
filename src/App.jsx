import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './componets/ProfileCard'
import avatar from "./assets/avatar.png";
import LightRays from './componets/LightRays.jsx'
import InfiniteCarousel from './componets/InfiniteCarousel.jsx'
import MagnetLines from './componets/MagnetLines.jsx'
import StarBorder from './componets/StarBorder.jsx'
import DecryptedText from './componets/DecryotedText.jsx'

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
      <div className='contenido'>
        <MagnetLines/>
      </div>
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
          title=""
          handle="AlexLL8416"
          status="Online"
        />
    </div>
  )
}

function RightPanel(){
  return(
    <div className='right'>
      <StarBorder
        as="div"
        className="custom-class"
        color="cyan"
        speed="10s"
        thickness={60}
      >
        <DecryptedText
          animateOn='view'
          text={"Soy Alejandro Lara Lara, estudiante del Doble Grado en Ingeniería Informática TI y Matemáticas en la Universidad de Sevilla. Me apasiona la Inteligencia Artificial y disfruto explorando cómo la tecnología puede resolver problemas complejos y abrir nuevas oportunidades. \n \n Me considero una persona autodidacta, perseverante y comprometida con cada proyecto. Trabajo con soltura tanto en equipo como de manera independiente, siempre con la determinación de alcanzar los objetivos que me propongo"}
          revealDirection='start'
          speed={70}
          maxIterations={20}
          parentClassName='texto-inicio'
        />
      </StarBorder>
    </div>
  )
}

export default App

