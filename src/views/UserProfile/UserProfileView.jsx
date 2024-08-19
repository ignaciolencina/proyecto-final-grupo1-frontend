import { Link } from "react-router-dom";
import UserProfileForm from "../../components/UserProfile/UserProfileForm";
import "./UserProfileStyle.css";
import "../../index.css";

const UserProfileView = () => {
  return (
    <section className="user-profile-section mt-5">
      <article className="register-card">
        <div className="register-content">
          <h1 className="text-center mt-2 registro-titulo">Registro</h1>
          <h2 className="text-center fs-5 mb-3">
            Nos alegra que te sumes a nuestro equipo!
          </h2>
          <UserProfileForm />
        </div>
      </article>
      <article className="mt-4 text-center login">
        <p>
          Ya tenes una cuenta creada?
          <Link className="text-decoration-none login-link ms-1" to="/login">
            INICIA SESIÓN
          </Link>
        </p>
      </article>
    </section>
  );
};
export default UserProfileView;
