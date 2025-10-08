import "./Layout.css"

function LayoutInicio(){

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior:"smooth"})
        }
    }

    return(
        <div className="layout">
            <div className="enlace" onClick={() => handleScroll("inicio")}>
                <p>Home</p>
            </div>
            <div className="enlace" onClick={() => handleScroll("estudios")}>
                <p>Estudios</p>
            </div>
            <div className="enlace" onClick={() => handleScroll("proyectos")}>
                <p>Proyectos</p>
            </div>
            <div className="enlace" onClick={() => handleScroll("contacto")}>
                <p>Contacto</p>
            </div>
        </div>
    )
}

export default LayoutInicio