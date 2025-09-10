import { createContext, useReducer, useEffect, useContext } from "react";

// Context
const CartContext = createContext();

// LocalStorage থেকে Initial State লোড
const loadInitialState = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("cart");
    try {
      const parsed = saved ? JSON.parse(saved) : null;
      if (parsed && Array.isArray(parsed.items)) return parsed;
      return { items: [] };
    } catch {
      return { items: [] };
    }
  }
  return { items: [] };
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemToAdd = {
        ...action.payload,
        quantity: action.payload.quantity || 1,
      };

      const exists = state.items.find(
        (i) =>
          i.id === itemToAdd.id &&
          (i.source === itemToAdd.source ||
            (!i.source && !itemToAdd.source))
      );

      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === itemToAdd.id &&
            (i.source === itemToAdd.source ||
              (!i.source && !itemToAdd.source))
              ? { ...i, quantity: i.quantity + itemToAdd.quantity }
              : i
          ),
        };
      }

      return { ...state, items: [...state.items, itemToAdd] };
    }

    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id &&
          (i.source === action.payload.source ||
            (!i.source && !action.payload.source))
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.id === action.payload.id &&
            (i.source === action.payload.source ||
              (!i.source && !action.payload.source))
              ? { ...i, quantity: Math.max(i.quantity - 1, 0) }
              : i
          )
          .filter((i) => i.quantity > 0), // quantity 0 হলে item remove হবে
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (i) =>
            !(
              i.id === action.payload.id &&
              (i.source === action.payload.source ||
                (!i.source && !action.payload.source))
            )
        ),
      };

    default:
      return state;
  }
};

// Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {}, loadInitialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => useContext(CartContext);
