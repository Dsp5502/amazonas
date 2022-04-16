import { typesCart } from '../types/types';

//* addCart

export const addCartSync = (product) => {
  return {
    type: typesCart.addCart,
    payload: product,
  };
};

//* DeleteCart

export const deleteCartSync = (product) => {
  return {
    type: typesCart.deleteCart,
    payload: product,
  };
};

//* EmptyCart

export const emptyCartSync = () => {
  return {
    type: typesCart.emptyCart,
  };
};
