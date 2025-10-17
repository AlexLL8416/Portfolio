import { useState } from "react";
import "./GaleriaCodigoGestorA.css";

// 🖼️ Importa las imágenes directamente
import imgModels from "../assets/models.webp";
import imgCrud from "../assets/crud.webp";
import imgSchemas from "../assets/schemas.webp";
import imgMain from "../assets/main.webp";

function GaleriaCodigoGestorA() {
  const items = [
    {
      id: 1,
      nombre: "models.py",
      imagen: imgModels,
      descripcion:
        "En este archivo se definen las tablas y relaciones del modelo de datos utilizando SQLAlchemy. Cada clase representa una entidad: Alimento, Tienda y Receta.",
    },
    {
      id: 2,
      nombre: "crud.py",
      imagen: imgCrud,
      descripcion:
        "Contiene las funciones CRUD (Create, Read, Update, Delete) que interactúan con la base de datos. Se encargan de la lógica principal de acceso a datos.",
    },
    {
      id: 3,
      nombre: "schemas.py",
      imagen: imgSchemas,
      descripcion:
        "Define los esquemas de entrada y salida con Pydantic. Sirve para validar los datos que llegan al backend y formatear las respuestas de forma consistente.",
    },
    {
      id: 4,
      nombre: "main.py",
      imagen: imgMain,
      descripcion:
        "Archivo principal de la API. Aquí se declaran los endpoints y se enlazan con las funciones CRUD, gestionando las rutas y las respuestas HTTP.",
    },
  ];

  const [visible, setVisible] = useState(null);

  const toggleItem = (id) => {
    setVisible(visible === id ? null : id);
  };

  return (
    <section className="galeria">
      <div className="gridGaleria">
        {items.map((item) => (
          <div
            key={item.id}
            className="cardCodigo"
            onClick={() => toggleItem(item.id)}
          >
            {visible === item.id ? (
              <div className="descripcion">
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
              </div>
            ) : (
              <>
                <img
                  src={item.imagen}
                  alt={`Código de ${item.nombre}`}
                  className="imagenCodigo"
                />
                <p className="nombreArchivo">{item.nombre}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default GaleriaCodigoGestorA;
