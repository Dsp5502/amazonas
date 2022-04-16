import React from 'react';

const FooterInicio = () => {
  return (
    <footer className=' h-2/6 md:h-1/6 w-full bgFooter '>
      <hr />
      <div className='w-10/12 md:w-2/4 lg:w-1/4 mx-auto text-sm py-5'>
        <ul className='flex justify-evenly text-xs text-blue-500'>
          <li className='cursor-pointer hover:text-black  '>
            Condiciones de uso
          </li>
          <li className='cursor-pointer hover:text-black  '>
            Aviso de privacidad
          </li>
          <li className='cursor-pointer  hover:text-black '>Ayudar</li>
        </ul>
        <p className='text-xs text-center mx-5 py-5 '>
          © 1996-2022, Amazonas.com, Inc. o sus afiliados{' '}
        </p>
      </div>
    </footer>
  );
};

export default FooterInicio;
