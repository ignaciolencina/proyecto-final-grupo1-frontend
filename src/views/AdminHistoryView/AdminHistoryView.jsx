import { Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getOrdersFn } from "../../api/orders";
import UserOrdersRow from "../../components/UserOrders/UserOrdersRow";
import { useState } from "react";
import Graphics from "../../components/AdminOrders/Graphics";

const AdminHistoryView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrdersFn,
  });

  if (isLoading) {
    return (
      <section className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
      </section>
    );
  }

  if (isError) {
    return (
      <div className="mt-3 mx-2 alert alert-danger">
        Lo sentimos, el historial no está disponible{" "}
        <span className="fs-2">
          <i className="bi bi-emoji-frown"></i>
        </span>
      </div>
    );
  }

  if (orders && orders.length === 0) {
    return (
      <div className="mt-3 mx-2 alert alert-danger">
        No hay pedidos en el historial por el momento.
        <span className="fs-2">
          <i className="bi bi-emoji-frown"></i>
        </span>
      </div>
    );
  }

  const indexOfLastRow = currentPage * rowsPerPage;

  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentOrders = orders.data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(orders.data.length / rowsPerPage);

  return (
    <>
      <section className="table-responsive mx-1 mt-3 tableH">
        <table className="table table-dark mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">Fecha</th>
              <th className="text-center">Total</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => {
              return (
                <UserOrdersRow
                  index={indexOfFirstRow + index}
                  key={order.orderId}
                  orders={order}
                />
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="paginationS mt-3">
        <div className="paginationB">
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            Anterior
          </button>
          <span className="text-light bodyFont px-2">
            Página {currentPage} de {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
          >
            Siguiente
          </button>
        </div>
      </section>
      <section className="mt-5">
        <h3 className="bodyFont text-secondary text-center fs-6">Se recomienda ver la gráfica en una pantalla de computadora</h3>
        <Graphics orders={orders}/>
      </section>
    </>
  );
};

export default AdminHistoryView;
