import {
  ADD_TO_CART,
  DEC_QUANTITY,
  EMPTY_CART,
  INC_QUANTITY,
  REMOVE_FROM_CART,
} from "../actionTypes";

export const cartReducer = (
  state = {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((ele) =>
            ele.id === existItem.id ? item : ele
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case REMOVE_FROM_CART:
      const updatedCartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );

      const newState = { ...state, cartItems: updatedCartItems };
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return newState;

    case INC_QUANTITY:
      const itemToIncrement = state.cartItems.find(
        (product) => product.id === action.payload
      );

      itemToIncrement.quantity = itemToIncrement.quantity + 1;

      const updatedIncArray = state.cartItems.map((elm) => {
        return elm.id === itemToIncrement.id ? itemToIncrement : elm;
      });
      localStorage.setItem("cart", JSON.stringify(updatedIncArray));
      return { ...state, cartItems: updatedIncArray };

    case DEC_QUANTITY:
      const itemToDecrement = state.cartItems.find((product) => {
        return product.id === action.payload;
      });
      itemToDecrement.quantity = itemToDecrement.quantity - 1;
      const updatedDecArr = state.cartItems.map((elm) => {
        return elm.id === itemToDecrement.id ? itemToDecrement : elm;
      });
      localStorage.setItem("cart", JSON.stringify(updatedDecArr));
      return { ...state, cartItems: updatedDecArr };

      case EMPTY_CART:
      localStorage.removeItem("cart");
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

