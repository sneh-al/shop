import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist((set) => ({
    cart: [],
    addProduct: (product) => {
      set((state) => ({
        cart: [...state.cart, product],
      }));
    },
    removeProduct: (productId) => {
      set((state) => ({
        cart: state.cart.filter((item) => item._id !== productId),
      }));
    },
    increaseQuantity: (productId) => {
      set((state) => ({
        cart: state.cart.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }));
    },
    decreaseQuantity: (productId) => {
      set((state) => ({
        cart: state.cart.map((item) =>
          item._id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }));
    },
    isalreadyInCart: (productId) => {
      return useStore.getState().cart.find((item) => item._id === productId);
    },
    clearCart: () => {
      set(() => ({
        cart: [],
      }));
    },
  }))
);

export default useStore;
