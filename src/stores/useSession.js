import { create } from "zustand";
import { decodeJWT } from "../utilities/decodeJWT";

let user = null;
let isLoggedIn = false;
let tableNumber = null;

const token = sessionStorage.getItem("token");

if (token) {
  user = decodeJWT(token).user;
  isLoggedIn = true;
  tableNumber = sessionStorage.getItem("tableNumber");
}

export const useSession = create((set) => {
  return {
    user,
    isLoggedIn,
    userToEdit: null,
    tableNumber,
    login: (newUser) => {
      set({ user: newUser, isLoggedIn: true });
    },
    logout: () => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("tableNumber");
      set({ user: null, isLoggedIn: false, tableNumber: null });
    },
    setUserToEdit: (user) => {
      set({ userToEdit: user });
    },
    updateUser: (updatedUser) => {
      set((state) => ({
        user: { ...state.user, ...updatedUser },
        userToEdit: { ...state.userToEdit, ...updatedUser },
      }));
    },
    clearUserToEdit: () => {
      set({ userToEdit: null });
    },
    setTableNumber: (number) => {
      sessionStorage.setItem("tableNumber", number);
      set({ tableNumber: number });
    },
  };
});
