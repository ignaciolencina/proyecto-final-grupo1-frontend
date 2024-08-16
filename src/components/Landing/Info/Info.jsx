import RailingText from "../../ui/RailingText/RailingText";
import Carousel from "./Carousel/Carousel";
import MenuLanding from "./MenuLanding/MenuLanding";

const Info = () => {
  return (
    <section>
      <section className="carouselSection">
        <Carousel />
        <RailingText/>
      </section>
      <section className="menuSection">
        <MenuLanding/>
      </section>
    </section>
  );
};
export default Info;
