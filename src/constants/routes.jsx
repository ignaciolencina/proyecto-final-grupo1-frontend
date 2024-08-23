import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import AuthViews from "../views/routing/AuthViews";
import PrivateViews from "../views/routing/PrivateViews";
import LoginView from "../views/Login/LoginView";
import RegisterView from "../views/Register/RegisterView";
import LandingView from "../views/LandingView";
import UserProfileView from "../views/UserProfile/UserProfileView";
import AdminView from "../views/Admin/AdminView";
import MenuView from "../views/MenuView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      // RUTAS PÚBLICAS
      {
        path: "",
        element: <LandingView />,
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
            element: <RegisterView />,
          },
        ],
      },
      // RUTAS PRIVADAS
      {
        path: "",
        element: <PrivateViews />,
        children: [
          {
            path: "menu",
            element: <MenuView />,
          },
          {
            path: "admin",
            element: <AdminView />,
          },
          {
            path: "userProfile",
            element: <UserProfileView />,
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
