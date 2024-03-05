import React from "react";
import { useState } from "react";
import arrowUp from "../assets/pictures/ArrowUp.png";
import "../Sass/Collapse.scss";
import PropTypes from "prop-types";
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
  let styleType;
  if (type === "large") {
    styleType = "large";
  } else if (type === "medium") {
    styleType = "medium";
  } else {
    styleType = "small";
  }

  return (
    <div className={styleType}>
      <div onClick={handleCollapse} className="collapseHeader">
        <p className="collapseHeaderName">{name}</p>
        <img className={clsName} src={arrowUp} alt="Collapse" />
      </div>
      {Toggle.state && (
        <div className="collapseHeaderContent">
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

Collapse.propTypes = {
  content: PropTypes.array,
  name: PropTypes.string,
  type: PropTypes.string,
};
