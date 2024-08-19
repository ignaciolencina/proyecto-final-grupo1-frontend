import RailingText from "../../../ui/RailingText/RailingText";
import "./welcomeStyle.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcomeTitle">
        <h1>BEST IN TOWN</h1>
      </div>
      <div className="welcomeImage">
        <img
          alt="Burger"
          src="https://www.goiko.com/es/wp-content/uploads/2023/04/CartaPortada_Web_Desktop.jpg"
        />
      </div>
      <RailingText text="WELCOME"/>
    </section>
  );
};
export default Welcome;
