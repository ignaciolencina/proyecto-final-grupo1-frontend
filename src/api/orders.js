const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postOrderFn = async (data) => {
  try {
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
    
  } catch (error) {
    console.error(error);
  }
};

export const getOrdersFn = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/orders`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Ocurrió un error leyendo las ordenes");
    }

    return data;

  } catch (error) {
    console.error(error);
  }
};
