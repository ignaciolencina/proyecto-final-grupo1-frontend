import { Link } from "react-router-dom";
import { useSession } from "../../../stores/useSession";
import Swal from "sweetalert2";
import "./headerStyle.css";
import logoBurgerTuc from "../../../assets/logoBurgerTuc.png";
import ModalMesa from '../../Modal/ModalMesa'
import { Button } from "react-bootstrap";
import { useState } from "react";


const Header = () => {
  const { user, isLoggedIn, logout } = useSession();

  const handleLogout = async () => {
    const action = await Swal.fire({
      title: "Attention",
      text: "Are you sure you want to logout?",
      icon: "info",
      confirmButtonText: "Logout",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    });

    if (action.isConfirmed) {
      logout();
    }
  };

  const [showModal, setShowModal] = useState(false)
  const [mesa, setMesa] = useState(null)

  const handleClose = () => setShowModal(false)
  const handleSave = (mesa) => setMesa(mesa);
    

  
  const handleOpen = () => setShowModal(true)

  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <button
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          className="navbarMenu"
          data-bs-target="#offcanvasNavbar"
          data-bs-toggle="offcanvas"
          type="button"
        >
         
          <span>
            <i className="bi bi-list"></i>
          </span>
        </button>
        <Link className="navbarBrand titleFont" to="/">
          BURGERTUC
        </Link>
        
        <div
          aria-labelledby="offcanvasNavbarLabel"
          className="offcanvas offcanvas-top"
          data-bs-theme="dark"
          id="offcanvasNavbar"
          tabIndex="-1"
        >
          <div className="offcanvas-header">
            <button
              aria-label="Close"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              type="button"
            ></button>
          </div>
          <div className="ps-4">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link reloadDocument className="nav-link titleFont" to="/">
                    VER MENÚ
                  </Link>
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link
                    reloadDocument
                    className="nav-link titleFont"
                    to="/login"
                  >
                    INGRESAR
                  </Link>
                </li>
              )}
              {isLoggedIn && user.isAdmin && (
                <li className="nav-item">
                  <Link
                    reloadDocument
                    className="nav-link titleFont"
                    to="/admin"
                  >
                    ADMIN
                  </Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button
                    className="btn btn-danger logoutButton titleFont"
                    onClick={handleLogout}
                  >
                    <span>
                      <i className="bi bi-box-arrow-right"></i>
                    </span>{" "}
                    SALIR
                  </button>
                </li>
              )}
              <div className="socialNavbar">
                <li className="nav-item">
                  <Link reloadDocument to="*">
                    <i className="bi bi-twitter-x"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link reloadDocument to="*">
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link reloadDocument to="*">
                    <i className="bi bi-youtube"></i>
                  </Link>
                </li>
              
              </div>
              <div>
                <img
                  alt="Logo de BurgerTuc"
                  className="logoOffcanvas"
                  src={logoBurgerTuc}
                />
              </div>
            </ul>
          </div>
        </div>
            <Link reloadDocument className="chart-link bi bi-cart4" to="/mi-carrito">
                  </Link>
                  <Button
                    className="nav-link titleFont"
                    onClick={handleOpen}
                  >
                    HACER PEDIDO
                  </Button>
                    <ModalMesa show={showModal} handleClose={handleClose} handleSave={handleSave}/>
                    {mesa && <h1>Bienvenido, estás en la mesa {mesa}</h1>}
      </div>
    </nav>
  );
};
export default Header;
