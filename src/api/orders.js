const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postOrderFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderId: data.orderId,
      tableNumber: data.tableNumber,
      totalPrice: data.totalPrice,
      products: data.products.map((product) => ({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
      })),
    }),
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error enviando la orden");
  }
};

export const getOrdersFn = async () => {
  const res = await fetch(`${BACKEND_URL}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error obteniendo las órdenes");
  }

  const data = await res.json();
  return data;
};