import { typesProduct } from '../types/types';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesProduct.addProduct:
      return {
        products: [action.payload],
      };
    case typesProduct.listProduct:
      return {
        products: [...action.payload],
      };
    case typesProduct.deleteProduct:
      return state.filter((product) => product.id !== action.payload);
    case typesProduct.updateProduct:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            ...action.payload,
          };
        }
        return product;
      });
    default:
      return state;
  }
};
