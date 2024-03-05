import "../Sass/Nav.scss";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const condition = ({ isActive }) =>
    isActive ? "navLink active" : "navLink inactive";
  return (
    <nav className="container">
      <NavLink className={condition} to="/">
        Accueil
      </NavLink>
      <NavLink className={condition} to="/About">
        A Propos
      </NavLink>
    </nav>
  );
}
