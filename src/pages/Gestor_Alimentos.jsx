import LiquidChrome from "../componets/LiquidChrome";
import "./Gestor_Alimentos.css";
import TextType from "../componets/TextTipe";
import diagrama from "../assets/diagrama_gest_a.webp";
import GaleriaCodigoGestorA from "../componets/GaleriaCodigoGestorA";
import OverlayPages from "../componets/OverlayPages";
import Contacto from "../componets/Contacto";

function PaginaGestor_Alimentos() {
  return (
    <div className="pagina-gestor">
      <div className="fondoG">
        <LiquidChrome
          baseColor={[0, 0.1, 0.2]}
          speed={0.1}
          frequencyY={1}
          interactive={false}
        />
      </div>
      <OverlayPages/>

      <div className="contenidoG">
        <div id="proyecto">
          <Inicio/>
        </div>
        <div className="separadorG"></div>
        <div id="codigo">
          <Codigo />
        </div>
        <div className="separadorG"></div>
        <div id="contacto">
          <Contacto />
        </div>
      </div>
    </div>
  );
}

function Inicio() {
  return (
    <div className="inicio-container">
      <TextType
        text={["Gestor de Alimentos", "API REST con FastAPI", "SQLAlchemy"]}
        typingSpeed={75}
        pauseDuration={3000}
        className="tituloInicioG"
      />

      <div className="inicioG">
        <div className="imgInicioG">
          <img src={diagrama} alt="Diagrama base de datos" />
          <p className="enlaceRepoG" onClick={()=>{window.open("https://github.com/AlexLL8416/Gestor-Alimentos","_blank")}}>Enlace del proyecto</p>
        </div>

        <div className="textoInicioG">
          <p>
            Este proyecto es una <strong>API REST construida con FastAPI</strong> que
            permite gestionar alimentos, recetas y tiendas. Utiliza{" "}
            <strong>SQLAlchemy</strong> para la capa de datos y sigue una
            arquitectura modular con separación de capas: modelos, esquemas,
            lógica CRUD y endpoints.
          </p>
          <p>
            El diseño de la <strong>base de datos relacional</strong> se ha
            pensado para mantener una estructura clara y escalable. En el
            modelo, cada <em>alimento</em> puede estar asociado a varias{" "}
            <em>tiendas</em> (donde se compara o se compra) y aparecer en
            diferentes <em>recetas</em>. Esto se representa mediante relaciones
            de tipo <strong>1-n</strong> y <strong>n-m</strong>, que reflejan
            cómo los datos interactúan entre sí en un contexto real.
          </p>
          <p>
            El objetivo es ofrecer una base sólida para futuras extensiones,
            como el seguimiento de precios, el cálculo de valor nutricional o la
            integración con APIs externas de recetas o supermercados.
          </p>
        </div>
      </div>
    </div>
  );
}

function Codigo() {
  return (
    <div className="codigo-container">
      <TextType
        text={["Código", "SQLAlchemy"]}
        typingSpeed={75}
        pauseDuration={6000}
        className="tituloG"
      />
      <GaleriaCodigoGestorA />
    </div>
  );
}

export default PaginaGestor_Alimentos;
