import PropTypes from "prop-types";

const AdminInput = ({ label, name, type, value, onChange, error }) => {
  const validateField = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (name === "name" && (!value || value.length > 30)) {
      errorMessage = "El nombre debe tener entre 1 y 30 caracteres";
    }

    if (name === "imageUrl") {
      const urlPattern = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
      if (!value || !urlPattern.test(value)) {
        errorMessage = "Debe ingresar una URL válida";
      }
    }

    if (name === "price") {
      const pricePattern = /^\d+(\.\d{2})?$/;
      const priceValue = parseFloat(value);
      if (!value || !pricePattern.test(value) || priceValue < 0.01 || priceValue > 1000000) {
        errorMessage = "El precio debe estar entre 0 y 1,000,000";
      }
    }

    if (name === "description" && (!value || value.length < 3 || value.length > 500)) {
      errorMessage = "La descripción debe tener entre 3 y 500 caracteres";
    }

    return errorMessage;
  };

  const handleBlur = (e) => {
    const errorMessage = validateField(e);
    if (errorMessage) {
      alert(errorMessage);
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

AdminInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default AdminInput;
