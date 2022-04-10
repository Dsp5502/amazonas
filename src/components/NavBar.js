import {
  faAngleDown,
  faBars,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavBar = () => {
  return (
    <div className=' bg-black h-28 md:h-20 text-white flex  justify-between items-center px-4 py-2 pt-2'>
      <div className=' h-12 mr-4 flex items-center  self-start md:hidden'>
        <FontAwesomeIcon className='text-xl ' icon={faBars} />
      </div>
      <div className=' mr-2 md:mr-0 mt-2 md:mt-0 flex flex-col  justify-center self-start md:self-center'>
        <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
        <img
          className='w-20 md:w-32 '
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
          alt='amazonas'
        />
      </div>
      <div className=' hidden md:flex flex-col justify-center '>
        <span className='mx-10'>Hola</span>
        <div className='mx-5 font-bold'>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className='ml-2'>Elige tu dirección</span>
        </div>
      </div>
      <div className=' flex h-10 w-80 mx-2 md:w-96 absolute md:relative text-black self-end md:self-center '>
        <select
          className='hidden md:flex md:w-2/6 rounded-l-full'
          name=''
          id=''
        >
          <option value=''>Todos los departamentos</option>
        </select>
        <input
          className='w-4/5  md:w-4/6 rounded-l-full md:rounded-none '
          type='text'
        />
        <div className='bg-orange-400 flex items-center w-1/5 md:w-1/6 justify-center rounded-r-full'>
          <FontAwesomeIcon
            className='text-black rounded-r-full'
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
      <div className='  mr-1 md:mr-0 mt-2 md:mt-0 text-sm md:text-base h-12 flex flex-col self-start md:self-center  '>
        <span className='md:mx-5'>Hola, identificate</span>
        <div className='md:mx-5 font-bold'>
          <span className='hidden md:inline-block mr-2'>Cuentas y Listas</span>
          <FontAwesomeIcon
            className='hidden md:inline-block'
            icon={faAngleDown}
          />
        </div>
      </div>
      <div className=' hidden md:flex flex-col justify-center '>
        <span className='mx-5'>Devoluciones</span>
        <div className='mx-5 font-bold'>
          <span className='mr-2'>Y pedidos</span>
        </div>
      </div>
      <div className='h-6  md:h-12 self-start mt-3 md:mt-0    flex  md:self-center'>
        <FontAwesomeIcon className='h-4 md:h-8' icon={faCartShopping} />
        <span className='hidden md:flex  ml-2'>Carrito</span>
      </div>
    </div>
  );
};

export default NavBar;
