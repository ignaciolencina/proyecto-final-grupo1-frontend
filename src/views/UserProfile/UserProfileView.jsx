import { useSession } from "../../stores/useSession";
import UserProfileForm from "../../components/UserProfile/UserProfileForm";
import "./UserProfileStyle.css";
import "../../index.css";
import { Link } from "react-router-dom";

const UserProfileView = () => {
  const { user, isLoggedIn } = useSession();

  return (
    <section className="user-profile-section">
      <article className="user-profile-card !important">
        <div className="user-profile-content">
          <h1 className="user-profile-titulo">
            {user?.firstname} {user?.lastname}
          </h1>
          <UserProfileForm />
        </div>
      </article>
      {isLoggedIn && user.isAdmin &&  (
        <div className="text-center">
          <Link
            className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-3"
            to="/adminHistory"
          >
            VER ESTADISTICAS DE PRODUCTOS
          </Link>
        </div>
      )}
      {isLoggedIn && !user.isAdmin && (
        <div className="text-center">
          <Link
            className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-3"
            to="/userHistory"
          >
            HISTORIAL DE PEDIDOS
          </Link>
        </div>
      )}
    </section>
  );
};

export default UserProfileView;
