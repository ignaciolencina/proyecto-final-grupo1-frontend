const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${BACKEND_URL}/products`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Ocurrió un error leyendo los items del menú");
  }

  return data;
};
