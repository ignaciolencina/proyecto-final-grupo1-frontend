import { useState } from "react";
import PropTypes from 'prop-types';

import './adminStyle.css'

const AdminForm = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    available: 'yes',
    ingredients: '',
    category: 'N/A',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({
      name: '',
      image: '',
      price: '',
      description: '',
      available: 'yes',
      ingredients: '',
      category: 'N/A',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 px-4">
        <label className="formSubTitle form-label">Nombre del Producto</label>
        <input
          required
          className="form-control"
          name="name"
          placeholder="Ingrese el nombre del producto"
          type="text"
          value={product.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 px-4">
        <label className="formSubTitle form-label">Imagen del producto URL</label>
        <input
          required
          className="form-control"
          name="image"
          placeholder="Ingrese la URL de la imagen"
          type="url"
          value={product.image}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 px-4">
        <label className="formSubTitle form-label">Precio</label>
        <input
          required
          className="form-control"
          min="0"
          name="price"
          placeholder="Ingrese el precio del producto"
          step="0.01"
          type="number"
          value={product.price}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3 px-4">
        <label className="formSubTitle form-label">Descripción</label>
        <textarea
          required
          className="form-control"
          name="description"
          placeholder="Ingrese una descripción básica del producto"
          rows="3"
          value={product.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="mb-3 px-4">
        <label className="formSubTitle form-label">Disponibilidad</label>
        <select
          required
          className="formSelect form-select"
          name="available"
          value={product.available}
          onChange={handleChange}
        >
          <option value="yes">Disponible</option>
          <option value="no">No Disponible</option>
        </select>
      </div>

      <div className="mb-3 px-4">
        <label className="formSubTitle form-label">Segun los ingredientes</label>
        <select
          required
          className="formSelect form-select"
          name="ingredients"
          value={product.category}
          onChange={handleChange}
        >
          <option value="N/A">N/A</option>
          <option value="vegetariano">Vegetariano</option>
          <option value="vegano">Vegano</option>
          <option value="sin TACC">Sin TACC</option>
        </select>
      </div>
      <div className="mb-3 px-4">
        <label className="formSubTitle form-label">Categoría</label>
        <select
          required
          className="formSelect form-select"
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="hamburguesas">Hamburguesas</option>
          <option value="kids">Menus kids</option>
          <option value="entrantes">Entrantes</option>
          <option value="bebidas">Bebidas</option>
          <option value="postres">Postres</option>
        </select>
      </div>


      <button className=" formBoton btn btn-danger" type="submit" >
        Guardar Producto
      </button>
    </form>
  );
};

AdminForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default AdminForm;

