import "./railingStyle.css";
import PropTypes from "prop-types";

const RailingText = (props) => {
  const { text1, text2 } = props;
  return (
    <div className="railing-container">
      <div className="railing-text text-light titleFont">
        <span>{text1}</span>
        <span className="textoRojo">{text2}</span>
        <span>{text1}</span>
        <span className="textoRojo">{text2}</span>
        <span>{text1}</span>
        <span className="textoRojo">{text2}</span>
      </div>
    </div>
  );
};
export default RailingText;

RailingText.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};