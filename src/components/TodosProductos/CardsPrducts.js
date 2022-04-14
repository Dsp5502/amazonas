import React from 'react';

const CardsPrducts = ({ product }) => {
  return (
    <div className='border-2 border-red-700'>
      <div className=' w-full md:w-3/12  p-4'>
        <img className='w-full' src={product.foto1} alt='' />
        <p className='text-black my-3'>{product.nombre}</p>
        <span className='flex text-black-600 my-3'> ${product.precio}</span>
      </div>
    </div>
  );
};

export default CardsPrducts;
