import { create } from "zustand";
import { decodeJWT } from "../utilities/decodeJWT";

let user = null;
let isLoggedIn = false;

const token = sessionStorage.getItem("token");
if (token) {
  user = decodeJWT(token).user;
  isLoggedIn = true;
}

export const useSession = create((set) => {
  return {
    user,
    isLoggedIn,
    userToEdit: null,
    login: (newUser) => {
      set({ user: newUser, isLoggedIn: true });
    },
    logout: () => {
      sessionStorage.removeItem("token");
      set({ user: null, isLoggedIn: false });
    },
    setUserToEdit: (user) => {
      set({ userToEdit: user });
    },
    clearUserToEdit: () => {
      set({ userToEdit: null });
    },
  };
});
