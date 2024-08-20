import { useQuery } from "@tanstack/react-query";
import { getMenuItemsFn } from "../api/menuItems";

import CardsMenu from "../components/Menu/CardsMenu"

const MenuView = () => {
    const {
        data: menuItems,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ['menuItems'],
        queryFn: getMenuItemsFn,
      });
    
      if (isLoading) {
        return <p className='mt-3 text-center'>Cargando entradas...</p>;
      }
    
      if (isError) {
        return (
          <div className='alert alert-danger'>
            Ocurrió un error leyendo los items del menú
          </div>
        );
      }
    
      if (menuItems && menuItems.length === 0) {
        return (
          <div className='alert alert-danger'>
            No se encontraron items del menú para mostrar
          </div>
        );
      }
    
      return (
        <section className='infoMenu ps-4'>
          {menuItems.map((menuItem) => (
            <article key={menuItem.id}>
              <CardsMenu menuItem={menuItem} />
            </article>
          ))}
        </section>
      );
}
export default MenuView