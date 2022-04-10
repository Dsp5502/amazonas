import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavBar = () => {
  return (
    <div className='border-2 border-blue-800 bg-black h-20 text-white flex justify-between px-6 pt-2'>
      <div className='border-2 border-yellow-400 flex flex-col justify-center '>
        <h1 className='text-2xl fontLogo '>Amazonas</h1>
        <img
          className='w-32 '
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
          alt='amazonas'
        />
      </div>
      <div className='border-2 border-yellow-400 flex flex-col justify-center '>
        <span className='mx-10'>Hola</span>
        <div className='mx-5 font-bold'>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className='ml-2'>Elige tu dirección</span>
        </div>
      </div>
      <div className='border-2 border-yellow-400 flex h-10 w-96'>
        <select className='w-2/6' name='' id=''>
          Todos los Departamentos
        </select>
        <input className='w-3/6' type='text' />
        <div className='bg-orange-400 flex items-center w-1/6'>
          <FontAwesomeIcon className='text-black' icon={faLocationDot} />
        </div>
      </div>
      <div className='border-2 border-yellow-400'>1</div>
      <div className='border-2 border-yellow-400'>1</div>
      <div className='border-2 border-yellow-400'>1</div>
    </div>
  );
};

export default NavBar;
