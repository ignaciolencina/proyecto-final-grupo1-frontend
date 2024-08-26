import { Container, Row, Col, Table } from 'react-bootstrap';

const AdminHistoryView = () => {
  return (
    <div>AdminHistoryView</div>
    <Container className="admin-history-view my-4">
      <h1>Pedidos Recibidos</h1>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th># Pedido</th>
                <th>Cliente</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody>
              {/* Itera sobre los pedidos recibidos */}
              <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>Detalles del pedido</td>
              </tr>
              {/* Repite la estructura para cada pedido */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHistoryView;
