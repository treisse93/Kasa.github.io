import { useState } from "react";
import arrowUp from "../assets/pictures/ArrowUp.png";
import "../Sass/Collapse.scss";

// Affiche un élément pouvant être replié/déplié
export default function Collapse({ content, name, type }) {
  const [Toggle, setToggle] = useState({
    state: false,
    direction: "down",
  });

  // Déterminer la direction de la flèche en fonction de l'état de Toggle
  const dir = Toggle.state === true ? "up" : "down";
  const clsName = dir === "up" ? "arrowUp" : "arrowDown";

  // Déplier/replier l'élément
  const handleCollapse = () => {
    setToggle({
      state: !Toggle.state,
      direction: dir,
    });
  };

  // Déterminer la classe en fonction du type passé en prop
  const styleType =
    type === "large"
      ? "large"
      : type === "medium"
        ? "medium"
        : "small";

  return (
    <div className={styleType}>
      <div onClick={handleCollapse} className="collapseHeader">
        <p className="name">{name}</p>
        <img className={clsName} src={arrowUp} alt="Collapse" />
      </div>
      {Toggle.state && (
        <div className="content">
          {/* Affiche le contenu s'il est déplié */}
          {content.map((element, index) => (
            <p key={index} className="listItem">
              {element}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
