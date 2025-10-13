import { useNavigate } from "react-router-dom";
import "./OverlayPages.css";

function OverlayPages() {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (sectionId === "inicio") {
      // 👇 Esto te lleva a la página principal ("/")
      navigate("/");
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="layout">
      <div className="enlace" onClick={() => handleScroll("inicio")}>
        <p>Home</p>
      </div>
      <div className="enlace" onClick={() => handleScroll("proyecto")}>
        <p>Proyecto</p>
      </div>
      <div className="enlace" onClick={() => handleScroll("codigo")}>
        <p>Código</p>
      </div>
      <div className="enlace" onClick={() => handleScroll("contacto")}>
        <p>Contacto</p>
      </div>
    </div>
  );
}

export default OverlayPages;
