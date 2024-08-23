import PropTypes from "prop-types";
import "./adminStyles.css";

const AdminList = ({ products, onEdit, onDelete }) => {
  const groupedProducts = (products || []).reduce((acc, product) => {
    if (!product || !product.category) {
      return acc;
    }
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="admin-list container">
      {Object.keys(groupedProducts).map((category) => (
        <div className="category-section categoryTitle py-4" key={category}>
          <h3>{category}</h3>
          <div className="row">
            {groupedProducts[category].map((product) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3"
                key={product._id}
              >
                <div className="card">
                  {console.log(product)}
                  <img
                    alt={product.name}
                    className="card-img-top"
                    src={product.imageUrl}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Precio: ${product.price}</p>
                    <p className="card-text">
                      Disponible: {product.available ? "Sí" : "No"}
                    </p>
                    <p className="card-text">
                      Ingredientes: {product.ingredients}
                    </p>
                    <button
                      className="btn btn-warning"
                      onClick={() => onEdit(product)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

AdminList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
      ingredients: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AdminList;
