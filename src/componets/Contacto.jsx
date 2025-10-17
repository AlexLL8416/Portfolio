import "./Contacto.css"
import TextType from "./TextTipe"

function Contacto(){
  return(
    <div>
      <TextType
        text={["Contacto","Contacto"]}
        typingSpeed={75}
        pauseDuration={3000}
        className='titulos'
      />
      <div>
        <div className='mail-linkedinC'>
          <p 
            onClick={()=>{window.open("mailto:laralaraalejandro8416@gmail.com","_blank")}}
            className='mailC'
          >
            Email
          </p>
          <p 
            onClick={()=>{window.open("https://www.linkedin.com/in/alejandro-lara-lara-461841384/","_blank")}}
            className='linkedinC'
          >
            Linkedin
          </p>
        </div>
        <p 
            onClick={()=>{window.open("https://github.com/AlexLL8416","_blank")}}
            className='githubC'
          >
            Github
          </p>
      </div>
    </div>
  )
}

export default Contacto