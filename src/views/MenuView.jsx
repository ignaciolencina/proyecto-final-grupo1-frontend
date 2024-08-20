import { useQuery } from "@tanstack/react-query";
import { getMenuItemsFn } from "../api/menuItems";

import CardsMenu from "../components/Menu/CardsMenu";

const MenuView = () => {
  const {
    data: menuItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["menuItems"],
    queryFn: getMenuItemsFn,
  });

  if (isLoading) {
    return (
      <p className="mt-3 text-center bodyFont text-light">Cargando menú...</p>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-danger">
        Ocurrió un error trayendo los items del menú
      </div>
    );
  }

  if (menuItems && menuItems.length === 0) {
    return (
      <div className="alert alert-danger">
        No se encontraron items del menú para mostrar
      </div>
    );
  }

  return (
    <section className="container mt-4">
      <section className="row">
        {menuItems.map((menuItem) => (
          <article className="col-12 col-md-4 col-lg-3 mb-3" key={menuItem.id}>
            <CardsMenu menuItem={menuItem} />
          </article>
        ))}
      </section>
    </section>
  );
};
export default MenuView;
