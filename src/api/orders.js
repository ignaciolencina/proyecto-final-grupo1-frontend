const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postOrderFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
