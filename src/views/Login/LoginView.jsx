import { Link } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import "./loginStyle.css";


const LoginView = () => {
  return (
    <section className="login-section mt-5">
      <article className="login-card">
        <div className="login-content">
          <h1 className="text-center mt-2 login-titulo">Bienvenido</h1>
          <h2 className="text-center fs-5 mb-3">Accede a tu cuenta</h2>
          <LoginForm />
        </div>
      </article>
      <article className="mt-5 text-center register ">
        <p>
          Aun no tienes cuenta creada?
          <Link
            className="text-decoration-none register-link ms-1"
            to="/register"
          >
            REGISTRATE
          </Link>
        </p>
      </article>
    </section>
  );
};
export default LoginView;
