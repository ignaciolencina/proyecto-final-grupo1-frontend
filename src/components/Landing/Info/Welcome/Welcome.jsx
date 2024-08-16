import burgerWelcome from "../../../../assets/burgerWelcome.png";
import RailingText from "../../../ui/RailingText/RailingText";

import "./welcomeStyle.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="mb-5 mt-3">
        <RailingText text="BIENVENIDO" />
      </div>
      <div className="mb-5">
        <RailingText text="WELCOME" />
      </div>
      <div className="mb-5">
        <RailingText text="BIENVENIDO" />
      </div>
      <div className="welcomeImage">
        <img alt="Burger" src={burgerWelcome} />
      </div>
    </section>
  );
};
export default Welcome;
