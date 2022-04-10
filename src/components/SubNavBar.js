import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SubNavBar = () => {
  return (
    <div className=' p-4  bg-zinc-900   hidden md:flex md:items-center  mt-8 md:mt-0 text-white'>
      <FontAwesomeIcon className='text-xl ' icon={faBars} />
      <ul className='flex  w-full  '>
        <li className='ml-7'>Todo</li>
        <li className='ml-7'>Tarjetas de Regalo</li>
        <li className='ml-7'>Prime</li>
        <li className='ml-7'>Los Más Vendidos</li>
        <li className='ml-7'>AmazonBasics</li>
        <li className='ml-7'>Cómputo y Tablets</li>
        <li className='ml-7'>Lo mas Regalado</li>
      </ul>
    </div>
  );
};

export default SubNavBar;
