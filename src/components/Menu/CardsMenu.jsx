import PropTypes from "prop-types";
import { toast } from "sonner";
import { useCartStore } from "../../stores/useCartStore";
import "./cardsMenuStyle.css";

const CardsMenu = ({ menuItem }) => {
  const { addToTheCart } = useCartStore();

  const handleAdd = (menuItem) => {
    toast.success("Producto agregado!", {
      duration: 800,
    });
    addToTheCart(menuItem);
  };

  const modalId = `descriptionModal-${menuItem.id}`;
  return (
    <section className={`menuCard ${menuItem.disabled ? "notAvailable" : ""}`}>
      <article>
        <div className="imageZone">
          <button
            className="modalTrigger"
            data-bs-target={`#${modalId}`}
            data-bs-toggle="modal"
            disabled={menuItem.disabled}
            type="button"
          >
            <div className="menuImage">
              <img alt={menuItem.name} src={menuItem.imageUrl} />
              {menuItem.disabled && <div className="overlay"></div>}
            </div>
          </button>
          <button
            className="addButton"
            disabled={menuItem.disabled}
            onClick={() => handleAdd(menuItem)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
        <div className="menuText mt-3 ps-3">
          <button
            className="modalTrigger"
            data-bs-target={`#${modalId}`}
            data-bs-toggle="modal"
            disabled={menuItem.disabled}
            type="button"
          >
            <h5>{menuItem.name}</h5>
          </button>
          <h2>${menuItem.price}</h2>
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
                {menuItem.name}
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
                alt={menuItem.name}
                className="modalImage"
                src={menuItem.imageUrl}
              />
              <p className="mt-3 mb-0 bodyFont">{menuItem.description}</p>
            </div>
            <div className="footer">
              <h2 className="priceModal me-5">${menuItem.price}</h2>
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                CERRAR
              </button>
              <button
                className="btn btn-danger m-3"
                onClick={() => handleAdd(menuItem)}
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
  menuItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
  }),
};
