import "./carouselStyle.css";

const Carousel = () => {
  return (
    <div className="carousel slide my-4" id="carouselCaptions">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            alt="Novedades"
            className="d-block w-100 carouselImage"
            src="	https://www.goiko.com/es/wp-content/uploads/2024/07/NOVEDADES_CARRUSEL_1.jpg"
          />
          <div className="carousel-caption">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Bebidas"
            className="d-block w-100 carouselImage"
            src="https://alafresca.com.ar/wp-content/uploads/2023/06/cerveza-negra.jpg"
          />
          <div className="carousel-caption">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Dieta meto"
            className="d-block w-100 carouselImage"
            src="https://www.goiko.com/es/wp-content/uploads/2023/10/LandingMetoverso_01-1.png"
          />
          <div className="carousel-caption">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Combo BurgerTuc"
            className="d-block w-100 carouselImage"
            src="https://www.goiko.com/es/wp-content/uploads/2023/10/CARRUSEL_MENU_NEW_V3.png"
          />
          <div className="carousel-caption">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Pet Friendly"
            className="d-block w-100 carouselImage"
            src="https://www.goiko.com/es/wp-content/uploads/2023/10/CARRUSEL_YESYOUCAN__NEW_V2.png"
          />
          <div className="carousel-caption">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        data-bs-slide="prev"
        data-bs-target="#carouselCaptions"
        type="button"
      >
        <span aria-hidden="true" className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-slide="next"
        data-bs-target="#carouselCaptions"
        type="button"
      >
        <span aria-hidden="true" className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
