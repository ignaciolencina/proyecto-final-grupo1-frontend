import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Producto 1", price: 10, quantity: 2 },
    { id: 2, name: "Producto 2", price: 15, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };


  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="container mt-5">
      <h2>Mi Pedido</h2>
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio Total: ${item.price * item.quantity}</p>
                </div>
                <div>
                  <button className="btn btn-secondary btn-sm me-2" onClick={() => handleDecrease(item.id)}>-</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => handleIncrease(item.id)}>+</button>
                  <button className="btn btn-danger btn-sm ms-2" onClick={() => handleRemove(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Total del Pedido: ${totalPrice}</h5>
              <button className="btn btn-success btn-block mt-3">Concluir Pedido</button>
              <button className="btn btn-danger btn-block mt-2" onClick={handleClearCart}>Limpiar Carrito</button>
              <button className="btn btn-link btn-block mt-2">Volver a la Tienda</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
