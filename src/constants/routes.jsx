import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import AuthViews from "../views/routing/AuthViews";
import PrivateViews from "../views/routing/PrivateViews";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <RootView />,
      children: [
        // RUTAS PÚBLICAS
        {
          path: '',
          element: <p className="text-light">Index</p>,
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