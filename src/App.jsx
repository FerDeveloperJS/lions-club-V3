import { BrowserRouter, Routes, Route } from "react-router";

// PAGES
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contacto from "./pages/Contacto.jsx";
// ---

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Otras páginas */}
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Ruta no encontrada */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
