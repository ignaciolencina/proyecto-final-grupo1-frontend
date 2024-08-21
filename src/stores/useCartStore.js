import { create } from "zustand";

// export const useCartStore = create((set) => ({
//   cartItems: [],
//   addToTheCart: (product) =>
//     set((state) => ({
//       cartItems: [...state.cartItems, product],
//     })),
//   clearCart: () => set({ cartItems: [] }),
// }));

export const useCartStore = create((set) => ({
  cartItems: [],
  addToTheCart: (product) => {
    console.log("Producto agregado:", product);
    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
  },
}));
