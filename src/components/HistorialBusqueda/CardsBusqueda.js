import React from 'react';

const CardsBusqueda = () => {
  return (
    <>
      <h1 className='font-semibold text-xl md:text-3xl mb-5'>
        Productos mas Visitados
      </h1>
      <hr />
      <div className='flex flex-col  md:flex-row p-4 '>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649744136/amazonas/1_ficfgg.png'
            alt=''
          />
          <p className='text-blue-400 my-3'>
            PS5 Call of Duty Black Ops: Cold War - Standard Edition -
            PlayStation 5
          </p>
          <span className='flex text-red-600 my-3'> $1,453.99</span>
        </div>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649744136/amazonas/2_nf49bl.png'
            alt=''
          />
          <p className='text-blue-400 my-3'>
            Ghost of Tsushima - Standard Edition - PlayStation 4
          </p>
          <span className='flex text-red-600 my-3'> $999.00</span>
        </div>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649744136/amazonas/4_k6yxlc.png'
            alt=''
          />
          <p className='text-blue-400 my-3'>
            Mortal Kombat 11 Ultimate - Standard Edition - PlayStation 5
          </p>
          <span className='flex text-red-600 my-3'>$1,359.99 </span>
        </div>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649744136/amazonas/3_lkzviy.png'
            alt=''
          />
          <p className='text-blue-400 my-3'>
            Just Dance 2021 - PS5 - Standard Edition - PlayStation 5
          </p>
          <span className='flex text-red-600 my-3'>$1,019.99</span>
        </div>
      </div>
    </>
  );
};

export default CardsBusqueda;
