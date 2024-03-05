import Nav from "./Nav";
import "../Sass/Header.scss";
import style from "../Sass/Header.module.scss";
import img from "../assets/Logos/HeaderLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
      <Link className="logoContainer" to="/">
        {" "}
        <img className="logo" src={img} alt="Logo du site Kaza"></img>
      </Link>
      <Nav />
    </header>
  );
}

//<Nav />
