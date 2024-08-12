import { Link } from "react-router-dom";
import { useSession } from "../../../stores/useSession";

import logoBurgerTuc from "../../../assets/logoBurgerTuc.png";
import "./footerStyle.css";
import RailingText from "../../ui/RailingText/RailingText";

const Footer = () => {
  const { isLoggedIn } = useSession();

  return (
    <footer className="pt-1">
      <RailingText/>
      <section className="ps-4 pe-5">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img
              alt="Logo BurgerTuc"
              className="logoFooter"
              src={logoBurgerTuc}
            />
          </div>
          <div className="socialFooter">
            <a href="">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram ps-4"></i>
            </a>
            <a href="">
              <i className="bi bi-youtube ps-4"></i>
            </a>
          </div>
        </div>
        <div className="pt-3">
          <h6 className="text-light bodyFont py-2">Explorar</h6>
          <ul className="p-0">
            {!isLoggedIn && (
              <li>
                <Link className="linkFooter bodyFont" to="/login">
                  Ver menú
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <Link className="linkFooter bodyFont" to="/login">
                  Hacer pedido
                </Link>
              </li>
            )}
            <li>
              <Link className="linkFooter bodyFont">Sobre Nosotros</Link>
            </li>
            <li>
              <Link className="linkFooter bodyFont">Contáctanos</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-light bodyFont py-2">Términos y condiciones</h6>
          <ul className="p-0">
            <li>
              <Link className="linkFooter bodyFont" to="*">
                Políticas de Privacidad
              </Link>
            </li>
            <li>
              <Link className="linkFooter bodyFont" to="*">
                Bases y condiciones
              </Link>
            </li>
            <li>
              <Link className="linkFooter bodyFont" to="*">
                Atención al cliente
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <p className="text-light bodyFont text-center">Copyright &copy; 2024</p>
    </footer>
  );
};
export default Footer;
