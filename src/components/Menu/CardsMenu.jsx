import "./cardsMenuStyle.css";

const CardsMenu = () => {
  return (
    <section>
      <article className="menuCard me-4 my-4">
        <button
          className="modalTrigger"
          data-bs-target="#descriptionModal"
          data-bs-toggle="modal"
          type="button"
        >
          <div className="menuImage">
            <img
              alt="Item de menú"
              src="https://www.goiko.com/es/wp-content/uploads/2017/03/KevinBacon_1200x600px-340x340.png"
            />
          </div>
        </button>
        <button className="addButton">
          <i className="bi bi-plus-lg"></i>
        </button>
        <div className="menuText mt-3 ps-3">
          <button
            className="modalTrigger"
            data-bs-target="#descriptionModal"
            data-bs-toggle="modal"
            type="button"
          >
            <h5>KEVIN BACON</h5>
          </button>
          <h2>$7000</h2>
        </div>
      </article>
      <div
        aria-hidden="true"
        aria-labelledby="foodDescription"
        className="modal fade"
        data-bs-theme="dark"
        id="descriptionModal"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="foodDescription">
                KEVIN BACON
              </h1>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              ></button>
            </div>
            <div className="modal-body">
              <img
                alt="Item de menú"
                className="modalImage"
                src="https://www.goiko.com/es/wp-content/uploads/2017/03/KevinBacon_1200x600px-340x340.png"
              />
              <p className="mt-3 mb-0 bodyFont">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                est beatae placeat dolore enim dolorem dignissimos architecto, a
                assumenda facilis, mollitia aliquid illum voluptates sit iure
                ab? Tempore, ipsum est
              </p>
            </div>
            <div className="text-end">
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                CERRAR
              </button>
              <button className="btn btn-danger m-3">AGREGAR</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardsMenu;
