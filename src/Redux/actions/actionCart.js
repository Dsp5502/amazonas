import { typesCart } from '../types/types';

//* addCart

export const addCartSync = (product) => {
  return {
    type: typesCart.addCart,
    payload: product,
  };
};
