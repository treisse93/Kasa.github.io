import "../Sass/Carrousel.scss";
import React, { useState } from "react";
import left from "../assets/pictures/leftArrow.png";
import right from "../assets/pictures/rightArrow.png";
import PropTypes from "prop-types";

// Carrousel d'images
export default function Carrousel({ pictures, title }) {
  const [index, setIndex] = useState(0);
  const length = pictures.length;

  // FImage précédente
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  // Image suivante
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  // Numérotation des images
  const counter = `${index + 1}/${length}`;
  // Flèches de navigation seulement si au moins 2 images
  const displayArrow = length <= 1 ? "arrowInactive" : "arrowActive";
  // Numérotation des images seulement si au moins 2 images
  const displayCounter = length > 1 ? "counter" : "hiddenCounter";

  return (
    <div className="carrousel">
      <img className="carrouselCoverImg" src={pictures[index]} alt={title} />
      <button
        className={`prev ${displayArrow}`}
        src={left}
        onClick={handlePrevious}
        alt="Previous"
      />
      <div className={displayCounter}>{counter}</div>
      <button
        className={`next ${displayArrow}`}
        src={right}
        onClick={handleNext}
        alt="Next"
      />
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string,
};
