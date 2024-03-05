import "../Sass/Cover.scss";
import PropTypes from "prop-types";

//affiche une couverture avec un titre et une image
export default function Cover({ type, title, img }) {
  // Affichage conditionnel du titre en fonction du type
  const titleDisplay =
    type === "main" ? <h1 className="titleH1">{title}</h1> : "";

  // Détermination de la classe CSS en fonction du type
  const clsName = type === "about" ? "aboutBanner" : "mainBanner";

  return (
    <section className={clsName}>
      <div className={`${clsName}Title`}>{titleDisplay}</div>
      <img className={`${clsName}CoverImg${type}`} src={img} alt={title} />
    </section>
  );
}

Cover.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
};
