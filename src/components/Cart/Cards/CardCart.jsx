import PropTypes from "prop-types";
import "./cardCartStyle.css";
import { useCartStore } from "../../../stores/useCartStore";

const CardCart = ({ product }) => {
  const {addToTheCart, subFromTheCart, clearItem} = useCartStore();
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
            <h5 className="mb-2">{product.quantity} x ${product.price}</h5>
          </div>
        </div>
        <div className="cartButtons col-3 p-0">
          <div className="buttonsPM">
            <button className="me-2" onClick={() => addToTheCart(product)}>
              <i className="bi bi-plus-lg"></i>
            </button>
            <button onClick={() => subFromTheCart(product)}>
              <i className="bi bi-dash-lg"></i>
            </button>
          </div>
          <button className="mt-3 buttonQ" onClick={() => clearItem(product)}>QUITAR</button>
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
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};
