import LiquidChrome from "../componets/LiquidChrome"
import "./Gestor_Alimentos.css"

function PaginaGestor_Alimentos(){
    return(
        <div>
            <div className="fondo">
                <LiquidChrome
                    baseColor={[0,0.1,0.2]}
                    speed={0.1}
                    frequencyY={1}
                    interactive={false}
                />
            </div>
            <div className="contenido">
                <h1>Página del gestor de alimentos</h1>
            </div>
        /</div>
    )
}

export default PaginaGestor_Alimentos
