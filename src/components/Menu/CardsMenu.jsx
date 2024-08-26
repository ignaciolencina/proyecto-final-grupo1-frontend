import PropTypes from "prop-types";
import { toast } from "sonner";
import { useCartStore } from "../../stores/useCartStore";
import "./cardsMenuStyle.css";

const CardsMenu = ({ product }) => {
  const { addToTheCart } = useCartStore();

  const handleAdd = (product) => {
    toast.success("Producto agregado!", {
      duration: 800,
    });
    addToTheCart(product);
  };

  console.log(product);

  const modalId = `descriptionModal-${product.id}`;
  return (
    <section className={`menuCard ${!product.available ? "notAvailable" : ""}`}>
      <article>
        <div className="imageZone">
          <button
            className="modalTrigger"
            data-bs-target={`#${modalId}`}
            data-bs-toggle="modal"
            disabled={!product.available}
            type="button"
          >
            <div className="menuImage">
              <img alt={product.name} src={product.imageUrl} />
              {!product.available && <div className="overlay"></div>}
            </div>
          </button>
          <button
            className="addButton"
            disabled={!product.available}
            onClick={() => handleAdd(product)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
          {product.ingredients === "sin TACC" && (
            <img
              alt="Sin Tacc"
              className="logoIngredients"
              src="https://seeklogo.com/images/S/sin-tacc-logo-4C05BF3770-seeklogo.com.png"
            />
          )}
          {product.ingredients === "vegetariano" && (
            <img
              alt="Vegetariano"
              className="logoIngredients"
              src="https://cdn-icons-png.flaticon.com/512/3637/3637997.png"
            />
          )}
        </div>
        <div className="menuText mt-3 ps-3">
          <button
            className="modalTrigger"
            data-bs-target={`#${modalId}`}
            data-bs-toggle="modal"
            disabled={product.available}
            type="button"
          >
            <h5>{product.name}</h5>
          </button>
          <h2>${product.price}</h2>
        </div>
      </article>
      <div
        aria-hidden="true"
        aria-labelledby="foodDescription"
        className="modal fade"
        data-bs-theme="dark"
        id={modalId}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="foodDescription">
                {product.name}
              </h1>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              ></button>
            </div>
            <div className="modal-body">
              <img
                alt={product.name}
                className="modalImage"
                src={product.imageUrl}
              />
              {product.ingredients === "sin TACC" && (
                <img
                  alt="Sin Tacc"
                  className="logoIngredientsModal"
                  src="https://seeklogo.com/images/S/sin-tacc-logo-4C05BF3770-seeklogo.com.png"
                />
              )}
              {product.ingredients === "vegetariano" && (
                <img
                  alt="Vegetariano"
                  className="logoIngredientsModal"
                  src="https://cdn-icons-png.flaticon.com/512/3637/3637997.png"
                />
              )}
              <p className="mt-3 mb-0 bodyFont">{product.description}</p>
            </div>
            <div className="footer">
              <h2 className="priceModal me-5">${product.price}</h2>
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                CERRAR
              </button>
              <button
                className="btn btn-danger m-3"
                onClick={() => handleAdd(product)}
              >
                AGREGAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardsMenu;

CardsMenu.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    ingredients: PropTypes.string.isRequired,
  }),
};
