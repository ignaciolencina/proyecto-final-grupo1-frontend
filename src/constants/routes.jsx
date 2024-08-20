import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import AuthViews from "../views/routing/AuthViews";
import PrivateViews from "../views/routing/PrivateViews";
import LoginView from "../views/Login/LoginView";
import RegisterView from "../views/Register/RegisterView";
import LandingView from "../views/LandingView";
import Cart from "../views/Carrito/Cart";
import ProductListPage from "../views/Lista-Productos/ProductListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      // RUTAS PÚBLICAS
      {
        path: '',
        element: <LandingView/>,
      },
      {
        path:"/mi-carrito",
        element: <Cart/>
      },
      {
        path: "/productos",
        element: <ProductListPage/>
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
