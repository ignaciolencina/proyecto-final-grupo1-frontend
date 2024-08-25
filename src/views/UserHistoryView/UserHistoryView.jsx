import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Alert } from 'react-bootstrap';

const UserHistoryView = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/orders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setOrders(data.data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <Container>
      <h1 className="my-4">Historial de Pedidos</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {orders.length > 0 ? (
        orders.map(order => (
          <Card key={order.id} className="mb-3">
            <Card.Header>Pedido ID: {order.id}</Card.Header>
            <Card.Body>
              <Card.Title>Total: ${order.totalPrice}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Número de Mesa: {order.tableNumber}</Card.Subtitle>
              <ListGroup variant="flush">
                {order.products.map((product, index) => (
                  <ListGroup.Item key={index}>
                    {product.name} - Cantidad: {product.quantity} - Precio: ${product.price}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No hay pedidos disponibles.</p>
      )}
    </Container>
  );
};

export default UserHistoryView;
