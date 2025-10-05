import { useState } from 'react'
import './App.css'
import ProfileCard from './componets/ProfileCard'
import avatar from "./assets/avatar.png";
import LightRays from './componets/LightRays.jsx'
import InfiniteCarousel from './componets/InfiniteCarousel.jsx'
import MagnetLines from './componets/MagnetLines.jsx'
import StarBorder from './componets/StarBorder.jsx'
import DecryptedText from './componets/DecryotedText.jsx'
import TextType from './componets/TextTipe.jsx'
import PixelTransition from './componets/PixelTransition.jsx'

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
      <Estudios/>
      <hr/>
      <Proyectos/>
    </div>
    
  )
}

function Inicio(){
  return (
    <div>
      <TextType
        text={["Portfolio de Alejandro Lara Lara","Alejandro Lara Lara"]}
        typingSpeed={75}
        pauseDuration={3000}
        className='tituloInicio'
      />
      <div className='containerInicio'>
        <LeftPanelInicio></LeftPanelInicio>
        <RightPanelInicio></RightPanelInicio>
      </div>
    </div>
  )
}

function LeftPanelInicio(){
  return(
    <div className='left'>
        <ProfileCard
          avatarUrl={avatar}
          miniAvatarUrl={avatar}
          name="Alejandro Lara"
          title=""
          handle="AlexLL8416"
          status="Online"
          onContactClick={()=>{window.open("https://www.linkedin.com/in/alejandro-lara-lara-461841384/","_blank")}}
        />
    </div>
  )
}

function RightPanelInicio(){
  return(
    <div className='right'>
      <StarBorder
        as="div"
        className="custom-class"
        color="cyan"
        speed="10s"
        thickness={65}
      >
        <DecryptedText
          animateOn='view'
          text={"Soy Alejandro Lara Lara, estudiante del Doble Grado en Ingeniería Informática TI y Matemáticas en la Universidad de Sevilla. Me apasiona la Inteligencia Artificial y disfruto explorando cómo la tecnología puede resolver problemas complejos y abrir nuevas oportunidades. \n \n Me considero una persona autodidacta, perseverante y comprometida con cada proyecto. Trabajo con soltura tanto en equipo como de manera independiente, siempre con la determinación de alcanzar los objetivos que me propongo."}
          revealDirection='start'
          speed={70}
          maxIterations={20}
          parentClassName='texto-inicio'
        />
      </StarBorder>
    </div>
  )
}

function Estudios(){
  return(
    <div>
      <TextType
        text={["Estudios","Doble Grado","Ingeniería Informática + Matemáticas"]}
        typingSpeed={75}
        pauseDuration={3000}
        className='titulos'
      />
      <div className='containerEstudios'>
        <LeftPanelEstudios></LeftPanelEstudios>
        <RightPanelEstudios></RightPanelEstudios>
      </div>
    </div>
  )
}

function LeftPanelEstudios(){
  return(
    <div className='leftEstudios'>
      <StarBorder
        as="div"
        className="custom-class"
        color="white"
        speed="10s"
        thickness={20}
      >
        <DecryptedText
          animateOn='view'
          text={"Actualmente curso el Doble Grado en Ingeniería Informática - Tecnologías Informáticas y Matemáticas en la Universidad de Sevilla. Esta doble titulación combina la formación tecnológica propia de la informática con la solidez científica de las matemáticas \n \n Por un lado, la rama de Ingeniería Informática me proporciona conocimientos en programación, desarrollo de software, bases de datos, sistemas operativos, redes y seguridad, además de la capacidad para diseñar y gestionar sistemas tecnológicos aplicados a diferentes ámbitos. \n \n Por otro lado, la parte de Matemáticas me aporta una base rigurosa en álgebra, análisis, probabilidad, estadística y modelización, esencial para comprender y resolver problemas complejos desde un enfoque lógico y abstracto. \n \n La unión de ambas disciplinas me permite abordar proyectos tanto desde la perspectiva práctica como desde el razonamiento matemático. Mi objetivo es especializarme en Inteligencia Artificial, un campo en el que se unen la progrmación, el análisis de datos y la investigación matemática, y que considero clave para el desarrollo de tecnologías innovadoras con impacto real en la sociedad."}
          revealDirection='center'
          speed={70}
          maxIterations={20}
          parentClassName='texto-estudios'
        />
      </StarBorder>
    </div>
  )
}

function RightPanelEstudios(){
  return(
    <div className='rightEstudios'>
      <div className='fotosFacultades'>
        <PixelTransition
          firstContent={
            <img
              src="https://static.grupojoly.com/clip/9559ac13-1bb0-4f54-a515-cf0c659ea04f_16-9-aspect-ratio_1600w_0.jpg"
              alt="ETSII"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: 25, color: "#ffffff" }} >Escuela Tecnica Superior de Ingeniería Informática</p>
              
            </div>
          }
          gridSize={16}
          pixelColor='#a270ffff'
          animationStepDuration={0.4}
          className="fotoFacultad"
        />
        <PixelTransition
          firstContent={
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrb0fEtK5W9NVOuBgtjZswH_kFQ4idMfrLX4BUv9d5IUoGfMhd_NHYQj53uM4vYMJe6eFK5rJFGBZ7BnhVelCuRVUw9Oq-_l27JwUoNJQjQtNfjEWhkq9emGwtraT0y1CmPIZZxfA=s680-w680-h510-rw"
              alt="ETSII"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: 25, color: "#ffffff" }}>Facultad de Matemáticas</p>
            </div>
          }
          gridSize={16}
          pixelColor='#5bf4ffff'
          animationStepDuration={0.4}
          className="fotoFacultad"
        />
      </div>
      <div className='itinerario'>
        <p onClick={()=>{window.open("https://matematicas.us.es/sites/matematicas/files/2018-06/ITINERARIO%20DOBLE%20TITULO%20INFORMATICA-MATEMATICAS_V_WEB_1.pdf","_blank")}}>
          Itinerario del Doble Grado
        </p>
      </div>
    </div>
  )
}

function Proyectos(){
  return(
    <div>
      <TextType
        text={["Proyectos","Proyectos"]}
        typingSpeed={75}
        pauseDuration={3000}
        className='titulos'
      />
    </div>
  )
}

export default App

