import React from 'react';
import { Container, Table, Spinner, Alert, Row, Col } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { getOrdersFn } from '../../api/orders';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const AdminHistoryView = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrdersFn,
  });

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

  const productStats = orders.reduce((acc, order) => {
    order.products.forEach(product => {
      if (!acc[product.name]) {
        acc[product.name] = 0;
      }
      acc[product.name] += product.quantity;
    });
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(productStats),
    datasets: [{
      label: 'Cantidad Vendida',
      data: Object.values(productStats),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Estadísticas de Productos Vendidos',
      },
    },
  };

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col md={12}>
          <h2 className="mb-4">Historial de Pedidos</h2>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tabla</th>
                  <th>Precio Total</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.tableNumber}</td>
                      <td>${order.totalPrice}</td>
                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      <Alert variant="info">No se encontraron pedidos.</Alert>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3 className="mb-4">Estadísticas de Productos</h3>
          <div className="d-flex justify-content-center">
            <div style={{ maxWidth: '600px', width: '100%' }}>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHistoryView;
