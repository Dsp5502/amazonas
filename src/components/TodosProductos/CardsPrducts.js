import React, { useState } from 'react';

import ProductoSelec from '../ProductoSelec';

const CardsPrducts = ({ product }) => {
  const [datoProducto, setDatoProducto] = useState([]);
  const [mostar, setMostar] = useState(false);

  const productoDetail = (pro) => {
    console.log(pro);
    setDatoProducto(pro);
    setMostar(true);
  };

  return (
    <div className='border-2 border-red-700'>
      {mostar ? (
        <ProductoSelec datoProducto={datoProducto} />
      ) : (
        <div className=' w-full md:w-3/12  p-4'>
          <img className='w-full' src={product.foto1} alt='' />

          <p className='text-black my-3'>{product.nombre}</p>
          <span className='flex text-black-600 my-3'> ${product.precio}</span>
          <button
            onClick={() => {
              productoDetail(product);
            }}
          >
            Ver mas
          </button>
        </div>
      )}
    </div>
  );
};

export default CardsPrducts;
