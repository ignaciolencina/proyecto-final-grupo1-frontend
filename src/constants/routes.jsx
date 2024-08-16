import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import AuthViews from "../views/routing/AuthViews";
import PrivateViews from "../views/routing/PrivateViews";
import LandingView from "../views/LandingView";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <RootView />,
      children: [
        // RUTAS PÚBLICAS
        {
          path: '',
          element: <LandingView/>,
        },
        // RUTAS DE AUTENTICACION
        {
          path: '',
          element: <AuthViews />,
          children: [
            {
              path: 'login',
              element: <p>Login</p>,
            },
            {
              path: 'register',
              element: <p>Registro</p>,
            },
          ],
        },
        // RUTAS PRIVADAS
        {
          path: '',
          element: <PrivateViews />,
          children: [
            {
              path: 'index',
              element: <p>Index</p>,
            },
            {
              path: 'admin',
              element: <p>Admin</p>,
            },
          ],
        },
        {
          path: '*',
          element: <p>Error 404</p>,
        },
      ],
    },
  ]);