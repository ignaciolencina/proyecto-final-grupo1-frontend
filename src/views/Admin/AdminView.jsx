import { useState } from "react";
import AdminForm from "../../components/Admin/AdminForm";

import './adminStyle.css'

const AdminView = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
        <article className="adminTitle">
          <h2>Formulario</h2>
        </article>
      <AdminForm
        onAddCategory={handleAddCategory}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default AdminView;
