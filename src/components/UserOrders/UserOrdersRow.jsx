import PropTypes from "prop-types";
import "./tableStyle.css";

const UserOrdersRow = ({ orders, index }) => {
  console.log(orders);
  const dateObject = new Date(orders.dateTime);
  const formattedDate = dateObject.toDateString().split("T")[0];
  const modalId = `descriptionModal-${orders.orderId}`;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td className="text-center">{formattedDate}</td>
        <td className="text-end">${orders.totalPrice}</td>
        <td className="text-end">
          <button
            className="detailButton"
            data-bs-target={`#${modalId}`}
            data-bs-toggle="modal"
            type="button"
          >
            Detalle
          </button>
        </td>
      </tr>
      <div
        aria-hidden="true"
        aria-labelledby="foodDescription"
        className="modal fade"
        data-bs-theme="dark"
        id={modalId}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="foodDescription">
                Pedido desde la mesa N°{orders.tableNumber}
              </h1>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              ></button>
            </div>
            <div className="modal-body">
              <p className="mt-3 mb-0 bodyFont"></p>
            </div>
            <div className="footer">
              <h2 className="priceModal me-5">${orders.totalPrice}</h2>
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                CERRAR
              </button>
            </div>
          </div>
        </div>
      </div>
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
  }),
  index: PropTypes.number.isRequired,
};
