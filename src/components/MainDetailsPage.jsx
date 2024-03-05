import Datas from "../datas/DatasControlers.js";
import Collapse from "./Collapse";
import "../Sass/MainDetailsPage.scss";
import Host from "./Host";
import Carrousel from "./Carrousel";
import PropTypes from "prop-types";

// Afficher la page détails
export default function MainDetailsPage({ pageId }) {
  const item = Datas.find((data) => data.id === pageId);
  const {
    title,
    location,
    rating,
    host,
    description,
    equipments,
    tags,
    pictures,
  } = item;
  const { name, picture } = host;

  return (
    <main className="mainDetailsPage">
      {/* carrousel d'images */}
      <Carrousel title={title} pictures={[...pictures]} />
      {/* informations de l'hôte */}
      <Host
        title={title}
        location={location}
        tags={tags}
        rating={rating}
        hostname={name}
        hostPicture={picture}
      />
      <div className="fullContent">
        {/* la description et les équipements sous forme collapse */}
        <Collapse type="medium" name="Description" content={[description]} />
        <Collapse type="medium" name="Équipements" content={equipments} />
      </div>
    </main>
  );
}

MainDetailsPage.propTypes = {
  pageId: PropTypes.string,
};
