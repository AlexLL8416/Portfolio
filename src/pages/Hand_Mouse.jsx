import "./Hand_Mouse.css"
import FaultyTerminal from "../componets/FaultyTerminal"
import OverlayPages from "../componets/OverlayPages"
import TextType from "../componets/TextTipe"
{/*import video from "../assets/video.mp4"*/}

function PaginaHand_Mouse(){
    return(
        <div className="pagina-hand-mouse">
            <div className="fondo">
                <FaultyTerminal
                    scale={1}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.1}
                    pause={false}
                    scanlineIntensity={1}
                    glitchAmount={0}
                    flickerAmount={0}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.1}
                    tint="#A7EF9C"
                    mouseReact={true}
                    mouseStrength={0.05}
                    pageLoadAnimation={false}
                    brightness={0.4}
                />
            </div>
            <OverlayPages/>

            <div className="contenido">
                <div id="proyecto">
                <Inicio/>
                </div>
                <div className="separador"></div>
                <div id="codigo">
                {/*<Codigo />*/}
                </div>
                <div className="separador"></div>
                <div id="contacto">
                {/*<Contacto />*/}
                </div>
            </div>
        </div>
    )
}

function Inicio(){
    return(
        <div className="inicioContainer">
            <TextType
                text={["Hand Mouse","OpenCV", "MediaPipe"]}
                typingSpeed={75}
                pauseDuration={3000}
                className='tituloInicio'
            />
            <div className="inicio">
                <div className="inicioIzquierda">
                    <video autoPlay muted playsInline loop controls={false} className="video">
                        {/*<source src={video} type="video/mp4"/>*/}
                        Tu navegador no soporta el video.
                    </video>
                    <p className="enlaceRepo" onClick={()=>{window.open("https://github.com/AlexLL8416/Hand_Mouse","blank_")}}>Enlace del proyecto</p>
                </div>
                <div className="textoInicio">
                    <p>
                        <strong>Hand Mouse</strong> es un proyecto de visión por computador que permite controlar el cursor del ratón mediante 
                        <strong> gestos de la mano detectados a través de la cámara web</strong>.
                    </p>
                    <p>
                        Desarrollado con <strong>Python</strong>, <strong>OpenCV</strong> y <strong>MediaPipe</strong>, traduce en tiempo real los movimientos de la mano 
                        en acciones del cursor, como moverlo, hacer clic o cerrar el programa, sin necesidad de tocar el ratón físico.
                    </p>
                    <p>
                        Diseñado como una demostración de <strong>interfaces basadas en gestos</strong> y 
                        <strong>aplicaciones prácticas de la visión artificial</strong>, este proyecto combina tecnología, accesibilidad e 
                        interacción natural entre el usuario y el ordenador.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PaginaHand_Mouse