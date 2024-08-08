import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../stores/useSession";

const PrivateViews = () => {
  const { isLoggedIn } = useSession();

  if (isLoggedIn) return <Outlet />;

  return <Navigate to="/login" />;
};
export default PrivateViews;
