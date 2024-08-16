import { Link } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import "./loginStyle.css";
import "../../index.css";
// import logoBurgerTuc from "../../assets/logoBurgerTuc.png";

const LoginView = () => {
  return (
    <section className="login-section mt-5">
      <article className="login-card">
        <div className="login-content">
          <h1 className="text-center mt-2 login-titulo">Bienvenido</h1>
          <h2 className="text-center fs-5">Accede a tu cuenta</h2>
          <LoginForm />
        </div>
      </article>
      <article className="mt-5 text-center ">
        <p>
          <Link
            className="text-decoration-none register-content ms-1"
            to="/register"
          >
            Registrar cuenta
          </Link>
        </p>
      </article>
    </section>
  );
};
export default LoginView;

// para agregar una imagen en el article de login
/*
 <img alt="Logo" className="login-img" src={logoBurgerTuc} /> 
 */
