import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../../api/products";
import { useState } from "react";

import CardsMenu from "../../components/Menu/CardsMenu";
import "./menuViewStyle.css"

const MenuView = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFn,
  });

  if (isLoading) {
    return (
      <p className="mt-3 text-center bodyFont text-light">Cargando menú...</p>
    );
  }

  if (isError) {
    return (
      <div className="mt-3 mx-2 alert alert-danger">
        Lo sentimos, el menú no está disponible{" "}
        <span className="fs-2">
          <i className="bi bi-emoji-frown"></i>
        </span>
      </div>
    );
  }

  if (products && products.length === 0) {
    return (
      <div className="mt-3 mx-2 alert alert-danger">
        Lo sentimos, estamos trabajando sobre el menú
      </div>
    );
  }

  const filteredProducts = selectedCategory
    ? products.data.filter((product) => product.category === selectedCategory)
    : products.data;

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="container mt-4">
      <section className="mb-3">
        <select
          aria-label="Seleccione una categoria"
          className="categorySelect"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">TODA LA CARTA</option>{" "}
          {[...new Set(products.data.map((product) => product.category))].map(
            (category) => (
              <option key={category} value={category}>
                {category.toUpperCase()}
              </option>
            )
          )}
        </select>
      </section>
      <section className="row">
        {filteredProducts.map((product) => (
          <article className="col-12 col-md-4 col-lg-3 mb-3" key={product.id}>
            <CardsMenu product={product} />
          </article>
        ))}
      </section>
    </section>
  );
};
export default MenuView;
