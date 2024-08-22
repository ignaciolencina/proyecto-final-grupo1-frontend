import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../api/products";

import CardsMenu from "../components/Menu/CardsMenu";

const MenuView = () => {
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

  return (
    <section className="container mt-4">
      <section className="row">
        {products.map((menuItem) => (
          <article className="col-12 col-md-4 col-lg-3 mb-3" key={menuItem.id}>
            <CardsMenu menuItem={menuItem} />
          </article>
        ))}
      </section> 
    </section>
  );
};
export default MenuView;
