import { Link } from "react-router-dom";
import "../Sass/Card.scss";

// Fonction Card qui affiche une carte avec un titre et une image
export default function Card({ title, img, id }) {
  return (
    // Utilisation du composant Link pour créer un lien vers la page de détails

    <Link to={`/Details/${id}`} id={id} className="containerCard">
      <img className="coverCard" src={img} alt={title} />
      <h3 className="titleCard">{title}</h3>
    </Link>
  );
}
