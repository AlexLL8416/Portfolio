import "./Hand_Mouse.css"
import FaultyTerminal from "../componets/FaultyTerminal"

function PaginaHand_Mouse(){
    return(
        <div>
            <div className="fondo">
                <FaultyTerminal
                    scale={1.5}
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
                    pageLoadAnimation={true}
                    brightness={1}
                />
            </div>
            <div className="contenido">
                <h1>Página del Hand Mouse</h1>
            </div>
        </div>
    )
}

export default PaginaHand_Mouse