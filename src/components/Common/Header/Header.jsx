import { Link } from "react-router-dom";
import { useSession } from "../../../stores/useSession";
import Swal from "sweetalert2";

import "./headerStyle.css";
import "../../../index.css";
import logoBurgerTuc from "../../../assets/logoBurgerTuc.png";

const Header = () => {
  const { user, isLoggedIn, logout } = useSession();

  const handleLogout = async () => {
    const action = await Swal.fire({
      title: "Atención",
      text: "Estas seguro que deseas cerrar sesión?",
      icon: "info",
      confirmButtonText: "CERRAR SESIÓN",
      showCancelButton: true,
      cancelButtonText: "CANCELAR",
    });

    if (action.isConfirmed) {
      logout();
    }
  };

  <div className="logoutCard">
    <handleLogout />
  </div>;

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
                  <Link
                    reloadDocument
                    className="nav-link titleFont"
                    to="/login"
                  >
                    HACER PEDIDO
                  </Link>
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
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link
                    reloadDocument
                    className="nav-link titleFont"
                    to="/userProfile"
                  >
                    PERFIL BORRAR
                  </Link>
                </li>
              )}
              {isLoggedIn && user.isAdmin && (
                <li className="nav-item">
                  <Link
                    reloadDocument
                    className="nav-link titleFont"
                    to="/userProfile"
                  >
                    PERFIL
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
      </div>
    </nav>
  );
};
export default Header;
