/*
import React, { useState, useEffect } from 'react';

const UserHistoryView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div>
      <h1>Historial de Pedidos</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Pedido ID: {order.id}, Total: {order.totalPrice}
            <ul>
              {order.products.map((product, index) => (
                <li key={index}>
                  {product.name} - Cantidad: {product.quantity} - Precio: {product.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserHistoryView;
*/
