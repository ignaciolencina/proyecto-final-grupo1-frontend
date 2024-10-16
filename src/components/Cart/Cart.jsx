import CardCart from "./Cards/CardCart";
import PropTypes from "prop-types";
import "./cartStyle.css";
import { useCartStore } from "../../stores/useCartStore";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { postOrderFn } from "../../api/orders";
import { useSession } from "../../stores/useSession";

const Cart = () => {
  const { cartItems, clearCart } = useCartStore();
  const { tableNumber, user } = useSession();

  const currentDateTime = new Date().toDateString();

  const totalPrice = cartItems.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  const { mutate: postOrder } = useMutation({
    mutationFn: postOrderFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Tu orden se envió correctamente");

      clearCart();
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message);
    },
  });

  const handleSubmit = (cartItems) => {
    if (cartItems.length !== 0) {
      const orderData = {
        dateTime: currentDateTime,
        userId: user.id,
        tableNumber: tableNumber,
        totalPrice: totalPrice,
        products: cartItems.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      };
      toast.loading("Enviando la orden");
      postOrder(orderData);
    } else{
      toast.error("No puede enviar ordenes vacías")
    }
  };

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
        <h2>Mesa N° {tableNumber}</h2>
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
          <button className={`buttonF ${cartItems.length === 0 ? "notAvailable" : ""}`} onClick={() => handleSubmit(cartItems)}>
            FINALIZAR PEDIDO
          </button>
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
