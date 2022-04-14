import { addDoc, collection, getDocs } from 'firebase/firestore';
import { baseDato } from '../../Firebase/fireBaseConfig';
import { typesProduct } from '../types/types';

//* Add Product

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

//* List Product

export const listProductSync = (product) => ({
  type: typesProduct.listProduct,
  payload: product,
});

export const listProductAsync = () => {
  return async (dispatch) => {
    const collectionTraer = await getDocs(
      collection(baseDato, 'productpsAmazonas')
    );
    const productos = [];
    collectionTraer.forEach((doc) => {
      productos.push({ ...doc.data() });
    });
    dispatch(listProductSync(productos));
  };
};
