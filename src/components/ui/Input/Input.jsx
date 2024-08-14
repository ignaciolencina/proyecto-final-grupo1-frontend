import PropTypes from "prop-types";
import "./inputStyle.css";

const Input = ({
  name,
  type = "text",
  label,
  error,
  className = "",
  options,
  register,
  placeholder = "Ingrese un texto",
  maxLenght,
  minLenght,
  textarea = false,
}) => {
  
  if (textarea) {
    return (
      <fieldset className={`form-floating ${className}`}>
        <textarea
          className={`form-control inputTextArea ${error ? "is-invalid" : ""}`}
          id={`${name}-input`}
          placeholder={placeholder}
          type={type}
          {...register(name, options)}
        />
        <label htmlFor={`${name}-input`}>{label}</label>
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{error?.message}</span>
        </div>
      </fieldset>
    );
  }

  return (
    <fieldset className={`form-floating ${className}`}>
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={`${name}-input`}
        maxLength={maxLenght}
        minLength={minLenght}
        placeholder={placeholder}
        type={type}
        {...register(name, options)}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      <div className="invalid-feedback">
        <span className="badge text-bg-danger">{error?.message}</span>
      </div>
    </fieldset>
  );
};
export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  className: PropTypes.string,
  register: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  maxLenght: PropTypes.number.isRequired,
  minLenght: PropTypes.number.isRequired,
  textarea: PropTypes.bool,
};
