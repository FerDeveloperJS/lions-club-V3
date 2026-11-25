import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop.jsx";

// PAGES
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contacto from "./pages/Contacto.jsx";
import Nosotros from "./pages/Nosotros.jsx";
// ---

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Otras páginas */}
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />

        {/* Ruta no encontrada */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
