import { create } from "zustand";

export const useCartStore = create((set) => {
  const savedCart = sessionStorage.getItem("cartItems");
  const initialCartItems = savedCart ? JSON.parse(savedCart) : [];

  return {
    cartItems: initialCartItems,

    addToTheCart: (product) => {
      set((state) => {
        const existingProduct = state.cartItems.find(
          (item) => item.id === product.id
        );
        const updatedCart = existingProduct
          ? state.cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cartItems, { ...product, quantity: 1 }];

        sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return { cartItems: updatedCart };
      });
    },

    subFromTheCart: (product) => {
      set((state) => {
        const existingProduct = state.cartItems.find(
          (item) => item.id === product.id
        );

        const updatedCart = existingProduct
          ? existingProduct.quantity > 1
            ? state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
            : state.cartItems.filter((item) => item.id !== product.id)
          : state.cartItems;

        sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return { cartItems: updatedCart };
      });
    },

    clearItem: (product) => {
      set((state) => {
        const updatedCart = state.cartItems.filter(
          (item) => item.id !== product.id
        );
        sessionStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return { cartItems: updatedCart };
      });
    },

    clearCart: () => {
      sessionStorage.removeItem("cartItems");
      return set({ cartItems: [] });
    },
  };
});
