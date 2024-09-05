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
          <div>
            <p>
              <strong>PRODUCTOS:</strong>
            </p>
            <ul>
              {orders.products.map((product, i) => (
                <li
                  className="d-flex justify-content-between fst-italic"
                  key={i}
                >
                  {product.name} - (${product.price}){" "}
                  <span className="me-4 fst-normal">x {product.quantity}</span>
                </li>
              ))}
            </ul>
            <p>
              <strong>Número de Mesa:</strong> {orders.tableNumber}
            </p>
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
