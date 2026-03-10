import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">

      <h2>Gramado Diário</h2>

      <div>

        <Link to="/">Home</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/reservas">Reservas</Link>

      </div>

    </nav>
  );
}
