import CardCart from "./Cards/CardCart";
import PropTypes from "prop-types";
import "./cartStyle.css";
import { useCartStore } from "../../stores/useCartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = cartItems.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  console.log("Precio total:", totalPrice);

  return (
    <div
      aria-labelledby="offcanvasCartLabel"
      className="offcanvas offcanvas-end"
      data-bs-theme="dark"
      id="offcanvasCart"
      tabIndex="-1"
    >
      <div className="offcanvas-cart">
        <button
          aria-label="Close"
          className="goBackButton"
          data-bs-dismiss="offcanvas"
          type="button"
        >
          <span>
            <i className="bi bi-arrow-left-short"></i>
          </span>
          VOLVER AL MENÚ
        </button>
      </div>
      <div className="cartDetail mx-2">
        <h2>Detalle</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CardCart key={index} product={item} />
          ))
        ) : (
          <p className="text-center">No hay productos en el carrito</p>
        )}
      </div>
      <div className="cartResume">
        <div className="textResume">
          <h2>PRECIO TOTAL :</h2>
          <h2>${totalPrice}</h2>
        </div>
        <div className="buttonsResume">
          <button className="buttonF">FINALIZAR PEDIDO</button>
          <button className="buttonC" onClick={() => clearCart(cartItems)}>
            LIMPIAR CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
};
