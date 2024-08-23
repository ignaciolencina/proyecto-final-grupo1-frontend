import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './adminStyles.css';

const AdminForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    price: '',
    description: '',
    available: true,
    ingredients: 'N/A',
    category: 'burgers',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: '',
        imageUrl: '',
        price: '',
        description: '',
        available: true,
        ingredients: 'N/A',
        category: 'burgers',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre del Producto</label>
        <input
          required
          className="form-control"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Imagen (URL)</label>
        <input
          required
          className="form-control"
          id="imageUrl"
          name="imageUrl"
          type="url"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">Precio</label>
        <input
          required
          className="form-control"
          id="price"
          name="price"
          type="text"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          required
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="available">Disponible</label>
        <input
          checked={formData.available}
          className="form-check-input"
          id="available"
          name="available"
          type="checkbox"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Ingredientes</label>
        <select
          className="form-control"
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
          className="form-control"
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

      <div className="form-group">
        <button className="formBoton" type="submit">
          {initialData ? 'Actualizar Producto' : 'Guardar Producto'}
        </button>
        {initialData && (
          <button className="formBoton" type="button" onClick={onCancel}>
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
