import CategoryCard from "./CategoryCard/CategoryCard";

const CategoriesLanding = () => {
  return (
    <section className="infoCategories ps-4">
      <CategoryCard
        categoryDescription="Para compartir o no"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/07/TO-SHARE.png"
        categoryName="ENTRANTES"
      />
      <CategoryCard
        categoryDescription="Las de siempre"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/10/BURGERS.png"
        categoryName="BURGERS"
      />
      <CategoryCard
        categoryDescription="Para los más peques"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/07/GOIKO-KIDS-2.png"
        categoryName="KIDS"
      />
      <CategoryCard
        categoryDescription="Brindemos"
        categoryImage="https://static.vecteezy.com/system/resources/previews/002/441/740/large_2x/fresh-coctail-drink-on-black-background-free-photo.jpg"
        categoryName="BEBIDAS"
      />
      <CategoryCard
        categoryDescription="Un poco de dulzura"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/04/CHEESECAKE_1200x600px-340x340.png"
        categoryName="POSTRES"
      />
      <CategoryCard
        categoryDescription="Descubrí más"
        categoryImage="https://www.goiko.com/es/wp-content/uploads/2023/10/TODA-LA-CARTA-1.png"
        categoryName="TODA LA CARTA"
      />
    </section>
  );
};
export default CategoriesLanding;
