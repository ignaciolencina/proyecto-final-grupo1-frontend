import RailingText from "../../ui/RailingText/RailingText";
import Carousel from "./Carousel/Carousel";
import CategoriesLanding from "./CategoriesLanding/CategorysLanding";
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
      <section className="categoriesSection">
        <CategoriesLanding />
      </section>
    </section>
  );
};
export default Info;
