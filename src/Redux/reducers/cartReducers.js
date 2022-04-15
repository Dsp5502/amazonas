import { typesCart } from '../types/types';

const initialState = {
  cart: [],
};

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesCart.addCart:
      return {
        cart: [...state.cart, action.payload],
      };
    case typesCart.listCart:
      return {
        cart: [...action.payload],
      };
    case typesCart.deleteCart:
      return {
        cart: state.cart.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
};
