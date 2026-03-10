import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Mapa from "./pages/Mapa";
import Reservas from "./pages/Reservas";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>

      <a
        className="whatsapp"
        href="https://wa.me/559999999999"
        target="_blank"
      >
        💬
      </a>
    </>
  );
}
