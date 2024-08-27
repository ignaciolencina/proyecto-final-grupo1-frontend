import { Link } from "react-router-dom";
import RegisterForm from "../../components/Register/RegisterForm";
import "./registerViewStyle.css";

const RegisterView = () => {
  return (
    <section className="register-section mt-5">
      <article className="register-card">
        <div className="register-content">
          <h1 className="text-center mt-2 registro-titulo">REGISTRO</h1>
          <h2 className="text-center fs-5 mb-3">
            Nos alegra que te sumes a nuestro equipo!
          </h2>
          <RegisterForm />
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
export default RegisterView;
