import React from 'react';

const CardsPrducts = ({ product, setPrueba, setDatoProducto }) => {
  const productoDetail = (pro) => {
    console.log(pro);
    setDatoProducto(pro);
    setPrueba(false);
  };

  return (
    <>
      <div className='border-2 border-green-700 w-1/4 h-1/4 flex'>
        <div className=' w-full   p-4   flex flex-col'>
          <img className=' ' src={product.foto1} alt='' />

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
      </div>
    </>
  );
};

export default CardsPrducts;
