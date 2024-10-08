import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../../stores/useSession";
import { useCartStore } from "../../../stores/useCartStore";

import Swal from "sweetalert2";

import Cart from "../../Cart/Cart";
import logoBurgerTuc from "../../../assets/logoBurgerTuc.png";
import "./headerStyle.css";

const Header = () => {
  const { user, isLoggedIn, logout } = useSession();
  const { cartItems = [] } = useCartStore();
  const targetButtonRef = useRef(null);
  const triggerClose = () => {
    if (targetButtonRef.current) {
      targetButtonRef.current.click();
    }
  };

  const handleLogout = async () => {
    const action = await Swal.fire({
      title: "Ya te vas?",
      text: "Desea cerrar sesión?",
      background: "#000000",
      color: "#ffffff",
      imageUrl:
        "https://i.pinimg.com/originals/a4/38/4c/a4384c5d86fa696a392ab216bc09a3d3.gif",
      imageWidth: 150,
      imageHeight: 150,
      confirmButtonText: "Salir",
      confirmButtonColor: "#EE2737",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    });

    if (action.isConfirmed) {
      logout();
      triggerClose();
    }
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <div className="logoSide">
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
        </div>
        <div>
          {isLoggedIn && (
            <button
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              className="navbarCart"
              data-bs-target="#offcanvasCart"
              data-bs-toggle="offcanvas"
              type="button"
            >
              <span>
                <i className="bi bi-cart4"></i>
              </span>
            </button>
          )}
          {cartItems.length >= 1 && <div className="activeCart"></div>}
        </div>
        <Cart />
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
              ref={targetButtonRef}
              type="button"
            ></button>
          </div>
          <div className="offStuff">
            <ul className="navbar-nav px-4">
              <div>
                <li>
                  <Link
                    className="nav-link titleFont"
                    to="/"
                    onClick={triggerClose}
                  >
                    INICIO
                  </Link>
                </li>
                {isLoggedIn && (
                  <li className="nav-item">
                    <Link
                      className="nav-link titleFont"
                      to="/menu"
                      onClick={triggerClose}
                    >
                      VER MENÚ
                    </Link>
                  </li>
                )}
                {!isLoggedIn && (
                  <li className="nav-item">
                    <Link
                      className="nav-link titleFont"
                      to="/login"
                      onClick={triggerClose}
                    >
                      VER MENÚ
                    </Link>
                  </li>
                )}
                {!isLoggedIn && (
                  <li className="nav-item">
                    <Link
                      className="nav-link titleFont"
                      to="/login"
                      onClick={triggerClose}
                    >
                      INGRESAR
                    </Link>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item">
                    <Link
                      className="nav-link titleFont"
                      to="/userProfile"
                      onClick={triggerClose}
                    >
                      PERFIL
                    </Link>
                  </li>
                )}
                {isLoggedIn && user.isAdmin && (
                  <li className="nav-item">
                    <Link
                      className="nav-link titleFont"
                      to="/admin"
                      onClick={triggerClose}
                    >
                      CARGAR PRODUCTOS
                    </Link>
                  </li>
                )}
                {isLoggedIn && user.isAdmin && (
                  <li className="nav-item">
                    <Link
                      className="nav-link titleFont"
                      to="/userHistory"
                      onClick={triggerClose}
                    >
                      VENTAS
                    </Link>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item">
                    <button className="logoutButton" onClick={handleLogout}>
                      <span>
                        <i className="bi bi-box-arrow-right pe-2"></i>
                      </span>
                      SALIR
                    </button>
                  </li>
                )}
              </div>
              <div className="socialNavbar">
                <li className="nav-item">
                  <Link to="twitter" onClick={triggerClose}>
                    <i className="bi bi-twitter-x"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="instagram" onClick={triggerClose}>
                    <i className="bi bi-instagram"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="youtube" onClick={triggerClose}>
                    <i className="bi bi-youtube"></i>
                  </Link>
                </li>
              </div>
            </ul>
            <img
              alt="Logo de BurgerTuc"
              className="logoOffcanvas"
              src={logoBurgerTuc}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
