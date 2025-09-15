// store/productStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the structure of a single cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

// Define the structure of the cart store state
interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  totalPrice: () => number;
}

// Zustand store with persistence using localStorage
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      // Add item to cart or increase quantity if it already exists
      addToCart: (item) => {
        const cart = get().cart;
        const index = cart.findIndex(
          (i) => i.id === item.id && i.size === item.size
        );
        if (index !== -1) {
          const updated = [...cart];
          updated[index].quantity += item.quantity;
          set({ cart: updated });
        } else {
          set({ cart: [...cart, item] });
        }
      },

      // Remove a specific item by id and size
      removeFromCart: (id, size) => {
        set({ cart: get().cart.filter((i) => !(i.id === id && i.size === size)) });
      },

      // Update quantity for a specific item, minimum 1
      updateQuantity: (id, size, quantity) => {
        set({
          cart: get().cart.map((i) =>
            i.id === id && i.size === size
              ? { ...i, quantity: quantity > 0 ? quantity : 1 }
              : i
          ),
        });
      },

      // Calculate the total price of all items in the cart
      totalPrice: () =>
        get().cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: "cart-storage", // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Use JSON storage in localStorage
    }
  )
);
