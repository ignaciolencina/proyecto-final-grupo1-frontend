import MenuCard from "./MenuCard/MenuCard";

const MenuLanding = () => {
  return (
    <section className="infoMenu ps-4">
      <MenuCard
        categoryDescription="Para compartir o no"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/07/TO-SHARE.png"
        categoryName="ENTRANTES"
      />
      <MenuCard
        categoryDescription="Las de siempre"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/10/BURGERS.png"
        categoryName="BURGERS"
      />
      <MenuCard
        categoryDescription="De tu manera favorita"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/10/SMASH-3.png"
        categoryName="SMASH BURGERS"
      />
      <MenuCard
        categoryDescription="Para los más peques"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/07/GOIKO-KIDS-2.png"
        categoryName="BURGER KIDS"
      />
      <MenuCard
        categoryDescription="Brindemos"
        categoryImage="https://static.vecteezy.com/system/resources/previews/002/441/740/large_2x/fresh-coctail-drink-on-black-background-free-photo.jpg"
        categoryName="BEBIDAS"
      />
      <MenuCard
        categoryDescription="De lunes a viernes al mediodia"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/10/CARRUSEL_MENU_NEW_V3.png"
        categoryName="MENU BURGERTUC"
      />
      <MenuCard
        categoryDescription="Descubrí más"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/10/TODA-LA-CARTA-1.png"
        categoryName="TODA LA CARTA"
      />
    </section>
  );
};
export default MenuLanding;
