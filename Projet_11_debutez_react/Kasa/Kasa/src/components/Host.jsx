import Tag from "./Tags";
import "../Sass/Host.scss";
import Rating from "./Rating";
import PropTypes from "prop-types";

// Fonction Host qui affiche les informations d'un hôte
export default function Host({
  title,
  location,
  rating,
  hostname,
  hostPicture,
  tags,
}) {
  // Sépare le nom et le prénom de l'hôte
  const [name, lastName] = hostname.split(" ");

  return (
    <section className="details">
      <div className="detailsHousing">
        <h1 className="detailsHousingTitle">{title}</h1>
        <p className="detailsHousingLocation">{location}</p>
        <div className="tagsContainer">
          {/* Afficher les tags */}
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <div className="detailsHost">
        <div className="detailsHostInfos">
          <div className="detailsHostInfosName">
            <p>{name}</p>
            <p>{lastName}</p>
          </div>
          {/* Afficher l'image de l'hôte */}
          <img
            className="detailsHostInfosPicture"
            src={hostPicture}
            alt={`portrait de l'hôte ${hostname}`}
          />
        </div>
        {/* Afficher la note/rating */}
        <Rating rate={rating} />
      </div>
    </section>
  );
}
Host.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.string,
  hostname: PropTypes.string,
  hostPicture: PropTypes.string,
  tags: PropTypes.array,
};
