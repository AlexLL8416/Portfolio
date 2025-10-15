import "./Hand_Mouse.css"
import FaultyTerminal from "../componets/FaultyTerminal"
import OverlayPages from "../componets/OverlayPages"
import TextType from "../componets/TextTipe"
import video from "../assets/video.mp4"
import deteccionMano from "../assets/inicioCapturaYDetectarManos.png"
import posiciones from "../assets/posiciones.png"
import calibracion1 from "../assets/calibracion.png" 
import calibracion2 from "../assets/calibracion2.png"
import gestos from "../assets/detectarGesto.png"
import raton from "../assets/moverRaton.png"
import aplicarGesto from "../assets/gestionarGestos.png"
import Contacto from "../componets/Contacto"

function PaginaHand_Mouse(){
    return(
        <div className="pagina-hand-mouse">
            <div className="fondo">
                <FaultyTerminal
                    scale={0.8}
                    gridMul={[2, 1]}
                    digitSize={0.8}
                    timeScale={0.1}
                    pause={false}
                    scanlineIntensity={1}
                    glitchAmount={0}
                    flickerAmount={0}
                    noiseAmp={0.5}
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
                <Codigo />
                </div>
                <div className="separador"></div>
                <div id="contacto">
                <Contacto />
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
                        <source src={video} type="video/mp4"/>
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

function Codigo(){
    return(
        <div>
            <TextType
                text={["Código","Python"]}
                typingSpeed={75}
                pauseDuration={3000}
                className='tituloInicio'
            />
            <div className="codigo">
                <div className="codigoContainer">
                    <div className="codigoImagen">
                        <img src={deteccionMano} alt="Detección de mano"/>
                    </div>
                    <div className="codigoTexto">
                        <h3>Detección de la mano (MediaPipe y OpenCV)</h3>
                        <p>
                            Este fragmento inicializa el módulo de MediaPipe Hands, que detecta y rastrea la mano en
                            tiempo real. Captura cada fotograma, invierte la imagen en modo espejo y la convierte a RGB
                            para que pueda ser procesada correctamente.
                        </p>
                    </div>
                </div>
                <hr></hr>
                <div className="codigoContainer">
                    <div className="codigoTexto">
                        <h3>Identificación de posiciones clave</h3>
                        <p>
                            Tras detectar la mano, se extraen las posiciones de los puntos clave (landmarks) que 
                            representan las articulaciones de los dedos. Esta información permite determinar con 
                            precisión la postura y orientación de la mano en cada momento.
                        </p>
                    </div>
                    <div className="codigoImagen">
                        <img src={posiciones} alt="Identificación de posiciones clave" />
                    </div>
                </div>
                <hr></hr>
                <div className="codigoContainer">
                    <div className="codigoImagen">
                        <img src={calibracion1} alt="Calibración inicial" />
                    </div>
                    <div className="codigoTexto">
                        <h3>Calibración inicial</h3>
                        <p>
                            El sistema realiza una calibración inicial para adaptar el área de detección a las 
                            condiciones del entorno. Esta fase define los límites del espacio donde se moverá 
                            el cursor, garantizando una respuesta más estable y precisa.
                        </p>
                    </div>
                </div>
                <hr></hr>
                <div className="codigoContainer">
                    <div className="codigoTexto">
                        <h3>Ejecución de la calibración</h3>
                        <p>
                            En esta etapa se muestran en pantalla las distintas fases del proceso de calibración. 
                            El programa va indicando al usuario, mediante mensajes sobre la cámara, qué debe hacer 
                            en cada momento. De esta forma, se asegura que el sistema registre correctamente 
                            las posiciones de referencia antes de comenzar la detección de gestos.
                        </p>
                    </div>
                    <div className="codigoImagen">
                        <img src={calibracion2} alt="Segunda fase de calibración" />
                    </div>
                </div>
                <hr></hr>
                <div className="codigoContainer">
                    <div className="codigoImagen">
                        <img src={gestos} alt="Detección de gestos" />
                    </div>
                    <div className="codigoTexto">
                        <h3>Detección de gestos</h3>
                        <p>
                            Se analizan las distancias entre los dedos para identificar gestos concretos, como 
                            clics o cierres del programa. Esto permite traducir acciones naturales de la mano 
                            en comandos interactivos.
                        </p>
                    </div>
                </div>
                <hr></hr>
                <div className="codigoContainer">
                    <div className="codigoTexto">
                        <h3>Control del cursor</h3>
                        <p>
                            Finalmente, el sistema convierte los movimientos detectados en desplazamientos del 
                            cursor en la pantalla. Gracias a la calibración y la detección precisa, el control 
                            resulta fluido, intuitivo y sin necesidad de hardware adicional.
                        </p>
                    </div>
                    <div className="codigoImagen">
                        <img src={raton} alt="Control del cursor con gestos" />
                    </div>
                </div>
                <hr></hr>
                <div className="codigoContainer">
                    <div className="codigoImagen">
                        <img src={aplicarGesto} alt="Aplicar gesto del pulgar" />
                    </div>
                    <div className="codigoTexto">
                        <h3>Aplicación del gesto y control del ratón</h3>
                        <p>
                            En esta última parte, el programa mueve el cursor en función de la posición detectada 
                            de la mano y evalúa el estado del pulgar. Si el sistema detecta una transición del 
                            pulgar de “abierto” a “cerrado”, interpreta ese cambio como una acción de clic.  
                            De esta manera, el usuario puede hacer clic simplemente cerrando el pulgar sobre la mano, 
                            logrando una interacción fluida y natural.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaHand_Mouse