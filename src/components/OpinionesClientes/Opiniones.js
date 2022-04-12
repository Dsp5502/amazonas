import React from 'react';
import CardOpinion from './CardOpinion';

const Opiniones = () => {
  return (
    <div className=' m-8 md:mt-0 flex flex-col mx-auto w-11/12  '>
      <h1 className='font-semibold text-xl md:text-3xl mb-5'>
        Opiniones de clientes
      </h1>
      <hr />
      <CardOpinion />
    </div>
  );
};

export default Opiniones;
