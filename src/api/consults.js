const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postConsultFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/consults`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error enviando el mensaje");
  }
};
