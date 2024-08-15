import { Link } from "react-router-dom";
import "./carouselStyle.css";

const Carousel = () => {
  return (
    <div className="carousel slide" id="carouselCaptions">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            alt="Novedades"
            className="d-block w-100 carouselImage"
            src="	https://www.goiko.com/es/wp-content/uploads/2024/07/NOVEDADES_CARRUSEL_1.jpg"
          />
          <div className="carousel-caption">
            <h5>NUEVO!</h5>
            <p>
              Descubrí las novedades{" "}
              <span>
                <i className="bi bi-arrow-up-right-circle"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Bebidas"
            className="d-block w-100 carouselImage"
            src="https://alafresca.com.ar/wp-content/uploads/2023/06/cerveza-negra.jpg"
          />
          <div className="carousel-caption">
            <h5>HAPPY HOUR</h5>
            <p>2x1 desde que salis de la ofi!</p>
            <Link className="verMasCarousel" to="*">
              VER MAS{" "}
              <span>
                <i className="bi bi-arrow-up-right-circle"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Dieta meto"
            className="d-block w-100 carouselImage"
            src="https://www.goiko.com/es/wp-content/uploads/2023/10/LandingMetoverso_01-1.png"
          />
          <div className="carousel-caption">
            <h5>DIETA METO</h5>
            <p>Le meto cheddar, le meto bacon...</p>
            <Link className="verMasCarousel" to="*">
              VER MAS{" "}
              <span>
                <i className="bi bi-arrow-up-right-circle"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Combo BurgerTuc"
            className="d-block w-100 carouselImage"
            src="https://www.goiko.com/es/wp-content/uploads/2023/10/CARRUSEL_MENU_NEW_V3.png"
          />
          <div className="carousel-caption">
            <h5>MENÚ BURGERTUC</h5>
            <p>Combiná como quieras!</p>
            <Link className="verMasCarousel" to="/login">
              VER MAS{" "}
              <span>
                <i className="bi bi-arrow-up-right-circle"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt="Pet Friendly"
            className="d-block w-100 carouselImage"
            src="https://www.goiko.com/es/wp-content/uploads/2023/10/CARRUSEL_YESYOUCAN__NEW_V2.png"
          />
          <div className="carousel-caption">
            <h5>SI SE PUEDE</h5>
            <p>Somos pet friendly y tenemos una sopresa para ellos!</p>
            <Link className="verMasCarousel" to="*">
              VER MAS{" "}
              <span>
                <i className="bi bi-arrow-up-right-circle"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="carouselButtons">
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselCaptions"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carouselArrow"
          ><i className="bi bi-arrow-left-short"></i></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselCaptions"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carouselArrow"
          ><i className="bi bi-arrow-right-short"></i></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
