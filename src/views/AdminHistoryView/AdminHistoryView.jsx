import { Container, Row, Col, Table } from 'react-bootstrap';

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
    <div>AdminHistoryView</div>
    <Container className="admin-history-view my-4">
      <h1>Pedidos Recibidos</h1>
      <Row>
        <Col>
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
                    <Alert variant="info">No orders found.</Alert>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3 className="mb-4">Estadísticas de Productos</h3>
          <Bar data={chartData} options={chartOptions} />
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default AdminHistoryView;
