import "./railingStyle.css";

const RailingText = () => {
  const text = "BURGERTUC";
  return (
    <div className="railing-container">
      <div className="railing-text text-light titleFont mb-2">
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
