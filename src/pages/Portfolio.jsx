import "./Portfolio.css"
import Prism from "../componets/Prism"
import Contacto from "../componets/Contacto.jsx"
import OverlayPages from "../componets/OverlayPages"
import TextType from "../componets/TextTipe"
import imgInicio from "../assets/portfolioInicio.webp"
import estructuraHandMouse from "../assets/estructuraHandMouse.webp"
import animacionCarrusel from "../assets/animacionCarrusel.webp"
import responsive from "../assets/responsive.webp"
import estructuraInicioyRoutes from "../assets/estructuraInicioyRouters.webp"

function PaginaPortfolio() {
    return (
        <div>
            <div className="fondoP">
                <Prism
                    animationType="rotate"
                    timeScale={0.2}
                    height={3.5}
                    baseWidth={5.5}
                    scale={5}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0}
                    glow={0.5}
                    offset={{ x: 0, y: -35 }}
                />
            </div>
            <OverlayPages />
            <div className="contenidoP">
                <div id="proyecto">
                    <Inicio />
                </div>
                <div className="separadorP"></div>
                <div id="codigo">
                    <Codigo />
                </div>
                <div className="separadorP"></div>
                <div id="contacto">
                    <Contacto />
                </div>
            </div>
        </div>
    )
}

function Inicio() {
    return (
        <div>
            <TextType
                text={["Portfolio", "React", "CSS"]}
                typingSpeed={75}
                pauseDuration={3000}
                className='tituloInicioP'
            />
            <div className="inicioP">
                <div className="textoInicioP">
                    <p>
                        Este portfolio es un proyecto desarrollado para mostrar mis trabajos de forma ordenada y atractiva.
                        Está construido con <strong>React</strong> y <strong>Vite</strong>, utilizando <strong>CSS</strong> para el diseño y <strong>Framer Motion</strong> para las animaciones.
                        He combinado componentes obtenidos de distintas bibliotecas y páginas de recursos con otros creados por mí, buscando siempre mantener una apariencia coherente y profesional en todo el sitio.
                        Cada proyecto cuenta con su propia página, donde explico su funcionamiento y muestro fragmentos destacados del código.
                        El resultado es un portfolio que refleja tanto mi capacidad para integrar soluciones existentes como para desarrollar las mías propias, uniendo técnica, organización y diseño en una misma plataforma.
                    </p>
                </div>
                <div className="inicioDerP">
                    <img src={imgInicio} className="imagenIniP" />
                    <p className="enlaceRepoP" onClick={() => { window.open("https://github.com/AlexLL8416/Portfolio", "_blanl") }}>Enlace del proyecto</p>
                </div>
            </div>
        </div>
    )
}

function Codigo() {
    return (
        <div>
            <TextType
                text={["Portfolio", "React", "CSS"]}
                typingSpeed={75}
                pauseDuration={3000}
                className='tituloInicioP'
            />
            <div className="codigoH">
                <div className="codigoContainerH">
                    <div className="codigoTextoH">
                        <h3>Esctructura de Hand Mouse</h3>
                        <p>
                            Este fragmento define la estructura principal de la página <strong>Hand Mouse</strong>. 
                            Utilizo un componente llamado <code>PaginaHand_Mouse</code> que organiza el contenido en secciones: introducción, código y contacto. 
                            Además, incluye un fondo animado mediante el componente <code>FaultyTerminal</code>, que aporta dinamismo visual, y un componente <code>OverlayPages</code> que gestiona la superposición entre secciones. 
                            Esta composición modular permite mantener una arquitectura clara y reutilizable, facilitando tanto la navegación como la personalización del contenido de cada proyecto.
                        </p>
                    </div>
                    <div className="codigoImagenH">
                        <img src={estructuraHandMouse} alt="Detección de mano" />
                    </div>
                </div>
                <hr/>
                 <div className="codigoContainerH">
                    <div className="codigoImagenH">
                        <img src={animacionCarrusel} alt="Animación del carrusel infinito" />
                    </div>
                    <div className="codigoTextoH">
                        <h3>Carrusel infinito</h3>
                        <p>
                            Este código implementa un <strong>carrusel infinito</strong> animado con <code>Framer Motion</code>. 
                            La idea es que las imágenes se desplacen continuamente hacia la izquierda, creando un efecto de movimiento constante. 
                            Para conseguirlo, duplico varias veces el array original de imágenes (<code>loopedImages</code>) y utilizo la variable de movimiento <code>x</code> para controlar su desplazamiento. 
                            Gracias a los cálculos dentro del <code>useEffect</code> y al uso de <code>useAnimationFrame</code>, el carrusel se reajusta automáticamente al llegar al final, logrando un bucle sin cortes. 
                            Además, el código detecta si el usuario está arrastrando, pausando el movimiento durante la interacción para una experiencia fluida.
                        </p>
                    </div>
                </div>

                <hr/>

                {/* --- 3️⃣ Diseño responsive --- */}
                <div className="codigoContainerH">
                    <div className="codigoTextoH">
                        <h3>Diseño responsive</h3>
                        <p>
                            En esta imagen se muestra cómo el portfolio se adapta a distintos tamaños de pantalla. 
                            Todo el diseño se ha construido con <strong>CSS flexible y adaptable</strong>, utilizando unidades relativas y <code>flexbox</code> para mantener una estructura equilibrada tanto en ordenadores como en dispositivos móviles. 
                            El objetivo fue asegurar que las animaciones, los textos y las imágenes mantengan su proporción sin perder legibilidad ni estética, ofreciendo una experiencia cómoda desde cualquier dispositivo.
                        </p>
                    </div>
                    <div className="codigoImagenH">
                        <img src={responsive} alt="Diseño responsive del portfolio" />
                    </div>
                </div>

                <hr/>

                {/* --- 4️⃣ Estructura y rutas principales (App.jsx) --- */}
                <div className="codigoContainerH">
                    <div className="codigoImagenH">
                        <img src={estructuraInicioyRoutes} alt="Estructura de App y Routers" />
                    </div>
                    <div className="codigoTextoH">
                        <h3>Estructura principal y rutas</h3>
                        <p>
                            Este fragmento define el componente principal <strong>App</strong>, encargado de gestionar toda la estructura y navegación del portfolio mediante el sistema de enrutamiento de <strong>React Router</strong>. 
                            Dentro del componente <code>&lt;Routes&gt;</code> se establecen las distintas rutas (<code>&lt;Route&gt;</code>) que permiten cargar dinámicamente cada página según la URL.  
                            Por ejemplo, la ruta <code>"/"</code> muestra la página principal con los apartados de inicio, estudios, proyectos y contacto, mientras que las rutas <code>"/gestor_alimentos"</code>, <code>"/hand_mouse"</code> y <code>"/portfolio"</code> cargan sus respectivos componentes de proyecto.
                            <br/><br/>
                            Para que este sistema de rutas funcione correctamente, al llamar al componente <strong>App</strong> dentro de <code>main.jsx</code> es necesario envolverlo dentro de un <code>&lt;BrowserRouter&gt;</code>. 
                            Este componente actúa como contenedor global que habilita el manejo de las rutas en toda la aplicación, permitiendo la navegación sin recargar la página.  
                            Gracias a esta configuración, el portfolio funciona como una <strong>Single Page Application (SPA)</strong>, donde las transiciones entre secciones son fluidas y rápidas.  
                            Además, el componente <code>ScrollToTop</code> se encarga de reposicionar automáticamente la vista al inicio cada vez que se cambia de ruta, mejorando la experiencia de usuario.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaPortfolio