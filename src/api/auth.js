import { decodeJWT } from "../utilities/decodeJWT";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// POST LOGIN FUNTION

export const postLoginFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(data, res);

  if (res.status === 204 || res.headers.get("content-length") === "0") {
    throw new Error("Respuesta vacía del servidor");
  }

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Ocurrió un error");
  }

  const token = resData.data;

  if (!token) {
    throw new Error(resData.message || "Ocurrió un error");
  }

  const userData = decodeJWT(token).user;

  // Persistir el JWT
  sessionStorage.setItem("token", token);

  return userData;
};

// POST REGISTER FUNTION

export const postRegisterFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    }),
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al crear el usuario");
  }

  // Token en registro
  const userData = await postLoginFn({
    email: data.email,
    password: data.password,
  });

  return userData;
};

// ---------------------------------------------
// PUT
// ---------------------------------------------
// LOGIN

export const putLoginFn = async (data) => {
  // data: { email, password }

  const res = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status === 204 || res.headers.get("content-length") === "0") {
    throw new Error("Respuesta vacía del servidor");
  }

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Ocurrió un error");
  }

  const token = resData.data;

  if (!token) {
    throw new Error(resData.message || "Ocurrió un error");
  }

  const userData = decodeJWT(token).user;

  // Persistir el JWT
  sessionStorage.setItem("token", token);

  return userData;
};

// REGISTER
export const putRegisterFn = async (userId, data) => {
  const res = await fetch(`${BACKEND_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    }),
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al editar el usuario");
  }

  // Token en registro
  const userData = await postLoginFn({
    email: data.email,
    password: data.password,
  });

  return userData;
};

// GET REGISTER FUNTION EMAIL CONTROL
export const checkEmailExists = async (email) => {
  const res = await fetch(`${BACKEND_URL}/users/check-email?email=${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error al verificar el correo");
  }

  const data = await res.json();

  return data.exists;
};
