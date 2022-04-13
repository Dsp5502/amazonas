import { addDoc, collection } from 'firebase/firestore';
import { baseDato } from '../../Firebase/fireBaseConfig';
import { typesProduct } from '../types/types';

export const addProductSync = (product) => ({
  type: typesProduct.addProduct,
  payload: product,
});

export const addProductAsync = (product) => {
  return (dispatch) => {
    addDoc(collection(baseDato, 'productpsAmazonas'), product)
      .then((resp) => {
        dispatch(addProductSync(product));
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
