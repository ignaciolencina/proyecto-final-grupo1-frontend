const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postConsultFn = async (data) => {

  const token = sessionStorage.getItem("token");

  const res = await fetch(`${BACKEND_URL}/consults`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error enviando el mensaje");
  }
};

export const getConsultsFn = async () => {
  const res = await fetch(`${BACKEND_URL}/consults`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Ocurrió un error obteniendo los mensajes');
  }

  return data;
};