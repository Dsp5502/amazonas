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
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case typesProduct.updateProduct:
      return {
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };
    default:
      return state;
  }
};
