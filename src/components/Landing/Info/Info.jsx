import RailingText from "../../ui/RailingText/RailingText";
import Carousel from "./Carousel/Carousel";

const Info = () => {
  return (
    <section>
      <section className="carouselSection">
        <Carousel />
        <RailingText/>
      </section>
    </section>
  );
};
export default Info;
