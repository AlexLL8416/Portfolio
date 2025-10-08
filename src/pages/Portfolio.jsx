import "./Portfolio.css"
import Prism from "../componets/Prism"

function PaginaPortfolio(){
    return(
        <div>
            <div className="fondo">
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
                    offset={{x:0,y:-35}}
                />
            </div>
            <div className="contenido">
                <h1>Página del Portfolio</h1>
            </div>
        </div>
    )
}

export default PaginaPortfolio