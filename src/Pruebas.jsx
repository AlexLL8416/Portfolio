import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfiniteCarousel from "./componets/InfiniteCarousel";

function Pagina1() {
  return <h1 className="text-center text-2xl mt-10">Página 1</h1>;
}

function Pagina2() {
  return <h1 className="text-center text-2xl mt-10">Página 2</h1>;
}

function Pagina3() {
  return <h1 className="text-center text-2xl mt-10">Página 3</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Carrusel como página principal */}
        <Route path="/" element={<InfiniteCarousel />} />
        {/* Rutas de ejemplo */}
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
