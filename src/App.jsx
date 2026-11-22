import { BrowserRouter, Routes, Route } from "react-router";

// PAGES
import Home from "./pages/Home";
import Services from "./pages/Services";
// ---

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Otras páginas */}
        <Route path="/servicios" element={<Services />} />

        {/* Ruta no encontrada */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
