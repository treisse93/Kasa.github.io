import "../Sass/Footer.scss";
import img from "../assets/Logos/FooterLogo.png";

// Fonction Footer qui affiche le pied de page
export default function Footer() {
  return (
    <footer className="containerFooter">
      <img
        className="LogoFooter"
        src={img}
        alt="Logo de Kaza en blanc sur fond noir"
      />
      <p className="Copyrights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
