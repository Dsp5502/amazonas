import React from 'react';

const CardsPrducts = ({ product, setPrueba, setDatoProducto }) => {
  const productoDetail = (pro) => {
    setDatoProducto(pro);
    setPrueba(false);
  };

  return (
    <>
      <div
        className=' w-full md:w-1/4 h-96 flex border-2 md:border-0 flex-wrap items-center justify-center cursor-pointer my-5'
        onClick={() => {
          productoDetail(product);
        }}
      >
        <div className=' w-full h-full p-4 flex flex-col justify-center'>
          <img className='h-52' src={product.foto1} alt='' />
          <div>
            <p className='text-black my-3 '>{product.nombre}</p>
            <span className='flex text-black-600 my-3  mt-3'>
              {' '}
              ${product.precio}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsPrducts;
