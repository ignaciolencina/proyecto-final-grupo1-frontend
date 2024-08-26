const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postConsultFn = async (data) => {
  try {
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
    
  } catch (error) {
    console.error(error);
  }
};

export const getConsultsFn = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/consults`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Ocurrió un error obteniendo los mensajes");
    }

    return data;

  } catch (error) {
    console.error(error);
  }
};
