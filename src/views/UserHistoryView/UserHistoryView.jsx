import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Alert } from 'react-bootstrap';
import { getOrdersFn } from '../api/orders';

const UserHistoryView = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersFn();
        setOrders(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container>
      <h1 className="my-4">Historial de Pedidos</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {orders.length > 0 ? (
        orders.map(order => (
          <Card className="my-3" key={order.id}>
            <Card.Body>
              <Card.Title>Pedido ID: {order.id}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Número de Mesa: {order.tableNumber}</ListGroup.Item>
                <ListGroup.Item>Total: ${order.totalPrice}</ListGroup.Item>
                <ListGroup.Item>
                  <strong>Productos:</strong>
                  <ul>
                    {order.products.map((product, index) => (
                      <li key={index}>
                        {product.name} - Cantidad: {product.quantity} - Precio: ${product.price}
                      </li>
                    ))}
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Alert variant="info">No hay pedidos disponibles.</Alert>
      )}
    </Container>
  );
};

export default UserHistoryView;
