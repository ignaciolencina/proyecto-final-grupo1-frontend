import { useEffect, useState } from "react";
import AcercaDe from "../components/Landing/AcercaDe/AcercaDe";
import Contacto from "../components/Landing/Contacto/Contacto";
import Info from "../components/Landing/Info/Info";
import { useSession } from "../stores/useSession";

const LandingView = () => {
  const { isLoggedIn, setTableNumber } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [inputTableNumber, setInputTableNumber] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      setShowModal(true); // Muestra el modal cuando el usuario está logueado
    }
  }, [isLoggedIn]);

  const handleSave = () => {
    setTableNumber(inputTableNumber); // Guarda el número de mesa
    setShowModal(false); // Cierra el modal
  };

  return (
    <section>
      <Info />
      <Contacto />
      <AcercaDe />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Ingresa el número de mesa</h2>
            <input
              type="number"
              value={inputTableNumber}
              onChange={(e) => setInputTableNumber(e.target.value)}
            />
            <button onClick={handleSave}>Guardar</button>
          </div>
        </div>
      )}
    </section>
  );
};
export default LandingView;
