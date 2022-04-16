import React from 'react';
import Cards from './ProductRelacion/Cards';

const ProductRelacion = ({ datoProducto }) => {
  return (
    <div className=' m-8 md:mt-0 flex flex-col mx-auto w-11/12 '>
      <Cards datoProducto={datoProducto} />
    </div>
  );
};

export default ProductRelacion;
