import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./adminStyles.css";
import AdminInput from "../ui/Form/AdminInput";

const AdminForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    price: "",
    description: "",
    available: true,
    ingredients: "N/A",
    category: "burgers",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: "",
        imageUrl: "",
        price: "",
        description: "",
        available: true,
        ingredients: "N/A",
        category: "burgers",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Validaciones personalizadas que puedes mover a AdminInput si es necesario
    if (!formData.name || formData.name.length > 30) {
      newErrors.name = "El nombre debe tener entre 1 y 30 caracteres";
    }

    const urlPattern = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    if (!formData.imageUrl || !urlPattern.test(formData.imageUrl)) {
      newErrors.imageUrl = "Debe ingresar una URL válida";
    }

    const pricePattern = /^\d+(\.\d{2})?$/;
    const priceValue = parseFloat(formData.price);
    if (
      !formData.price ||
      !pricePattern.test(formData.price) ||
      priceValue < 0.01 ||
      priceValue > 1000000
    ) {
      newErrors.price = "El precio debe estar entre 0 y 1,000,000";
    }

    if (
      !formData.description ||
      formData.description.length < 3 ||
      formData.description.length > 500
    ) {
      newErrors.description =
        "La descripción debe tener entre 3 y 500 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <AdminInput
        error={errors.name}
        label="Nombre del Producto"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <AdminInput
        error={errors.imageUrl}
        label="Imagen (URL)"
        name="imageUrl"
        type="url"
        value={formData.imageUrl}
        onChange={handleChange}
      />

      <AdminInput
        error={errors.price}
        label="Precio"
        name="price"
        type="text"
        value={formData.price}
        onChange={handleChange}
      />

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          required
          id="description"
          name="description"
          value={formData.description}
          onBlur={() => {
            if (
              !formData.description ||
              formData.description.length < 3 ||
              formData.description.length > 500
            ) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                description:
                  "La descripción debe tener entre 3 y 500 caracteres",
              }));
            } else {
              setErrors((prevErrors) => ({
                ...prevErrors,
                description: null,
              }));
            }
          }}
          onChange={handleChange}
        />
        {errors.description && (
          <p className="error-text">{errors.description}</p>
        )}
      </div>

      <div className="form-group d-flex">
        <label htmlFor="available">Disponible</label>
        <div className="form-switch ml-0">
          <input
            checked={formData.available}
            id="available"
            name="available"
            type="checkbox"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Ingredientes</label>
        <select
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        >
          <option value="N/A">N/A</option>
          <option value="vegetariano">Vegetariano</option>
          <option value="vegano">Vegano</option>
          <option value="sin TACC">Sin TACC</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="burgers">Burgers</option>
          <option value="entrantes">Entrantes</option>
          <option value="kids">Kids</option>
          <option value="bebidas">Bebidas</option>
          <option value="postres">Postres</option>
        </select>
      </div>

      <div className="form-actions">
        <button className="form-button" type="submit">
          {initialData ? "Actualizar" : "Guardar Producto"}
        </button>
        {initialData && (
          <button className="form-button" type="button" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

AdminForm.propTypes = {
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AdminForm;
