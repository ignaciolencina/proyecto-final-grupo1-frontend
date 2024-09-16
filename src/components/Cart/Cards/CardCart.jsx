import PropTypes from "prop-types";
import "./cardCartStyle.css";
import { useCartStore } from "../../../stores/useCartStore";
import Swal from "sweetalert2";

const CardCart = ({ product }) => {
  const { addToTheCart, subFromTheCart, clearItem } = useCartStore();

  const handleSub = async (product) => {
    if (product.quantity === 1) {
      const action = await Swal.fire({
        title: "Atención",
        html: `¿Desea eliminar la última unidad de <b>"${product.name}"</b>?`,
        background: "#000000",
        color: "#ffffff",
        imageUrl: `${product.imageUrl}`,
        imageWidth: 150,
        imageHeight: 150,
        confirmButtonText: "Eliminar",
        confirmButtonColor: "#EE2737",
        cancelButtonText: "Cancelar",
        showCancelButton: true,
      });

      if (action.isConfirmed) {
        subFromTheCart(product);
      }
    } else {
      subFromTheCart(product);
    }
  };

  const handleClear = async (product) => {
    const action = await Swal.fire({
      title: "Atención",
      html: `¿Desea eliminar todos las unidades de <b>"${product.name}"</b>?`,
      background: "#000000",
      color: "#ffffff",
      imageUrl: `${product.imageUrl}`,
      imageWidth: 150,
      imageHeight: 150,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#EE2737",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    });

    if (action.isConfirmed) {
      clearItem(product);
    }
  };

  return (
    <section className="cartSection container mb-3">
      <article className="cartItem row">
        <div className="col-4 p-0">
          <div className="cartImage">
            <img alt={product.name} src={product.imageUrl} />
          </div>
        </div>

        <div className="cartText col-5">
          <div>
            <p>{product.name}</p>
          </div>
          <div>
            <h5 className="mb-2">
              {product.quantity} x ${product.price}
            </h5>
          </div>
        </div>
        <div className="cartButtons col-3 p-0">
          <div className="buttonsPM">
            <button className="me-2" onClick={() => handleSub(product)}>
              <i className="bi bi-dash-lg"></i>
            </button>
            <button onClick={() => addToTheCart(product)}>
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
          <button className="mt-3 buttonQ" onClick={() => handleClear(product)}>
            QUITAR
          </button>
        </div>
      </article>
    </section>
  );
};
export default CardCart;

CardCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number,
  }),
};
