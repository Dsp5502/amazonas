import React from 'react';

const SubNavBar2 = () => {
  return (
    <div className=' p-4     hidden md:flex md:items-center  mt-8 md:mt-0 text-black '>
      <ul className='flex  w-full  '>
        <li className='ml-7 hover:font-bold cursor-pointer'>Electrónicos</li>
        <li className='ml-7 hover:font-bold cursor-pointer'>
          Los Más Vendidos
        </li>
        <li className='ml-7 hover:font-bold cursor-pointer'>
          Televisión y Video
        </li>
        <li className='ml-7 hover:font-bold cursor-pointer'>
          Cómputo y Tabletas
        </li>
        <li className='ml-7 hover:font-bold cursor-pointer'>
          Audio y Equipos de Sonido
        </li>
      </ul>
    </div>
  );
};

export default SubNavBar2;
