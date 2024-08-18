import "./railingStyle.css";
import PropTypes from "prop-types";

const RailingText = (props) => {
  const { text } = props;
  return (
    <div className="railing-container">
      <div className="railing-text text-light titleFont">
        <span>{text}</span>
        <span className="textoRojo">{text}</span>
        <span>{text}</span>
        <span className="textoRojo">{text}</span>
        <span>{text}</span>
        <span className="textoRojo">{text}</span>
      </div>
    </div>
  );
};
export default RailingText;

RailingText.propTypes = {
  text: PropTypes.string.isRequired,
};