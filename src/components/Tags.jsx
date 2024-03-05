import "../Sass/Tags.scss";
import PropTypes from "prop-types";

export default function Tag({ tag }) {
  return (
    <label key={tag} className="tag">
      {tag}
    </label>
  );
}

Tag.propTypes = {
  tag: PropTypes.string,
};
