import RailingText from "../../ui/RailingText/RailingText";
import Carousel from "./Carousel/Carousel";
import MenuLanding from "./MenuLanding/MenuLanding";
import Welcome from "./Welcome/Welcome";

const Info = () => {
  return (
    <section>
      <section className="welcomeSection">
        <Welcome />
      </section>
      <section className="carouselSection">
        <Carousel />
        <RailingText text="BURGERTUC" />
      </section>
      <section className="menuSection">
        <MenuLanding />
      </section>
    </section>
  );
};
export default Info;
