import React, { useState, useEffect } from 'react';
import {
  Container,
  Table,
  Spinner,
  Alert,
  Button,
  Collapse,
  Card,
} from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getOrdersFn } from "../../api/orders";


const UserHistoryView = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrdersFn,
  });

  const [selectedOrderId, setSelectedOrderId] = useState(null);

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">Error: {error.message}</Alert>
      </Container>
    );
  }

  const orders = data?.data || [];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Historial de Pedidos</h2>
      {orders.length > 0 ? (
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tabla</th>
                <th>Precio Total</th>
                <th>Fecha</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <React.Fragment key={order.id}>
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.tableNumber}</td>
                    <td>${order.totalPrice}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>
                      <Button
                        variant="info"
                        onClick={() =>
                          setSelectedOrderId(
                            order.id === selectedOrderId ? null : order.id
                          )
                        }
                      >
                        {order.id === selectedOrderId
                          ? "Ocultar Detalles"
                          : "Ver Detalles"}
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <Collapse in={selectedOrderId === order.id}>
                        <Card>
                          <Card.Body>
                            <h5>Detalles del Pedido</h5>
                            {order.products.map((product, index) => (
                              <Card key={index} className="mb-2">
                                <Card.Body>
                                  <div className="d-flex justify-content-between">
                                    <div>
                                      <strong>Producto:</strong> {product.name}
                                    </div>
                                    <div>
                                      <strong>Precio:</strong> ${product.price}
                                    </div>
                                    <div>
                                      <strong>Cantidad:</strong>{" "}
                                      {product.quantity}
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            ))}
                          </Card.Body>
                        </Card>
                      </Collapse>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <Container className="text-center mt-5">
          <Alert variant="info">No se encontraron pedidos.</Alert>
        </Container>
      )}
    </Container>
  );
};

export default UserHistoryView;
