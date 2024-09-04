import { Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getUserOrdersFn } from "../../api/orders";
import { useSession } from "../../stores/useSession";

const UserHistoryView = () => {
  const { user } = useSession();

  const userId = user.id;

  const {
    data: userOrders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userOrders", userId],
    queryFn: () => getUserOrdersFn(userId),
  });

  console.log(userOrders);

  if (isLoading) {
    return (
      <section className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
      </section>
    );
  }

  if (isError) {
    return (
      <div className="mt-3 mx-2 alert alert-danger">
        Lo sentimos, tus ordenes no estan disponibles{" "}
        <span className="fs-2">
          <i className="bi bi-emoji-frown"></i>
        </span>
      </div>
    );
  }

  if (userOrders && userOrders.length === 0) {
    return (
      <div className="mt-3 mx-2 alert alert-danger">
        No tienes pedidos por el momento.
        <span className="fs-2">
          <i className="bi bi-emoji-frown"></i>
        </span>
      </div>
    );
  }

  return <section></section>;
};

export default UserHistoryView;
