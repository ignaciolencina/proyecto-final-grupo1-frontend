import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import AuthViews from "../views/routing/AuthViews";
import PrivateViews from "../views/routing/PrivateViews";
import LoginView from "../views/Login/LoginView";
import RegisterForm from "../components/Register/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      // RUTAS PÚBLICAS
      {
        path: "",
        element: <p className="text-light">Index</p>,
      },
      // RUTAS DE AUTENTICACION
      {
        path: "",
        element: <AuthViews />,
        children: [
          {
            path: "login",
            element: <LoginView />,
          },
          {
            path: "register",
            element: <RegisterForm />,
          },
        ],
      },
      // RUTAS PRIVADAS
      {
        path: "",
        element: <PrivateViews />,
        children: [
          {
            path: "index",
            element: <p>Index</p>,
          },
          {
            path: "admin",
            element: <p>Admin</p>,
          },
        ],
      },
      {
        path: "*",
        element: <p>Error 404</p>,
      },
    ],
  },
]);
