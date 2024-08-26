import React, { useState, useEffect } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import { getOrdersFn } from '../api/orders';

const AdminHistoryView = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrdersFn();
        setOrders(response.data); // Usa response.data si esa es la estructura correcta
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);
  
return (
    <Container>
      <h1 className="my-4">Historial de Pedidos</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Número de Mesa</th>
              <th>Total</th>
              <th>Productos</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.tableNumber}</td>
                <td>${order.totalPrice}</td>
                <td>
                  <ul>
                    {order.products.map((product, index) => (
                      <li key={index}>
                        {product.name} - Cantidad: {product.quantity} - Precio: ${product.price}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminHistoryView;
