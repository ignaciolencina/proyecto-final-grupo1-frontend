import { useState } from "react";
import PropTypes from "prop-types";

import "./tableStyle.css";

const UserOrdersRow = ({ orders, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = orders.dateTime.split("T")[0];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr onClick={toggleExpand}>
        <td>{index + 1}</td>
        <td className="text-center">{formattedDate}</td>
        <td className="text-center">${orders.totalPrice}</td>
        <td className="text-center">
          <button
            aria-controls={`collapseRow-${index}`}
            aria-expanded={isExpanded ? "true" : "false"}
            className="detailButton"
            data-bs-target={`#collapseRow-${index}`}
            data-bs-toggle="collapse"
            type="button"
          >
            {isExpanded ? "Cerrar" : "Detalle"}
          </button>
        </td>
      </tr>
      <tr
        className={`collapse ${isExpanded ? "show" : ""}`}
        id={`collapseRow-${index}`}
      >
        <td colSpan="4">
          <div className="table-container">
            <table className="table table-dark innerTable mb-0">
              <thead>
                <tr>
                  <th className="ps-4">Producto</th>
                  <th className="text-center">Precio unitario</th>
                  <th className="text-end pe-4">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {orders.products.map((product, i) => (
                  <tr key={i}>
                    <td className="ps-4">{product.name}</td>
                    <td className="text-center">${product.price}</td>
                    <td className="text-end pe-4">x{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </>
  );
};
export default UserOrdersRow;

UserOrdersRow.propTypes = {
  orders: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    tableNumber: PropTypes.number.isRequired,
    products: PropTypes.array.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
