import React from 'react';

const MinFotos = ({ foto1, foto2, foto3, setFotoSelec }) => {
  const imagen = (foto) => {
    setFotoSelec(foto);
  };

  return (
    <div className='flex   lg:flex-col justify-around lg:justify-center items-center  '>
      <div
        className='  w-2/12  lg:w-10/12 text-center lg:mt-8 mb-2 border-2 border-black  '
        onClick={() => {
          imagen(foto1);
        }}
      >
        <img src={foto1} alt='minFoto' className='w-full h-18' />
      </div>
      <div
        className='  w-2/12  lg:w-10/12 text-center border-2 border-black mb-2  '
        onClick={() => {
          imagen(foto2);
        }}
      >
        <img src={foto2} alt='minFoto' className='w-full h-18' />
      </div>
      <div
        className=' w-2/12  lg:w-10/12 text-center  border-2 border-black mb-2 '
        onClick={() => {
          imagen(foto3);
        }}
      >
        <img src={foto3} alt='minFoto' className='w-full h-18' />
      </div>
    </div>
  );
};

export default MinFotos;
