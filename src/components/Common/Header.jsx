import { Link, NavLink } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import Swal from "sweetalert2";

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

  return (
    <nav className="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mia Cucina
        </Link>
        <button
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler ms-auto me-3"
          data-bs-target="#navbarNav"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "nav-link active" : "nav-link";
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
            {isLoggedIn && user.isAdmin && (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                  to="/admin"
                >
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {isLoggedIn && (
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
export default Header;
