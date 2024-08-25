import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const AdminHistoryView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${yourAuthToken}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching admin orders:', error));
  }, []);

  return (
    <Container>
      <h1 className="my-4">Historial de Pedidos (Admin)</h1>
      <Row>
        {orders.map(order => (
          <Col md={6} lg={4} key={order.id} className="mb-4">
            <Card>
              <Card.Header>Pedido ID: {order.id}</Card.Header>
              <Card.Body>
                <Card.Text>Total: {order.totalPrice}</Card.Text>
                <Card.Text>Mesa: {order.tableNumber}</Card.Text>
                <ListGroup variant="flush">
                  {order.products.map((product, index) => (
                    <ListGroup.Item key={index}>
                      {product.name} - Cantidad: {product.quantity} - Precio: {product.price}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminHistoryView;
