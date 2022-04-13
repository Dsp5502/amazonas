import React from 'react';
import { useNavigate } from 'react-router-dom';

const FooterInicio = () => {
  return (
    <footer className=' h-1/6 w-full bg-gray-100 '>
      <hr />
      <div className='w-10/12 md:w-1/4 mx-auto text-sm py-5'>
        <ul className='flex justify-evenly text-xs text-blue-500'>
          <li>Condiciones de uso</li>
          <li>Aviso de privacidad</li>
          <li>Ayudar</li>
        </ul>
        <span className='text-xs mx-5 '>
          © 1996-2002, Amazonas.com, Inc. o sus afiliados{' '}
        </span>
      </div>
    </footer>
  );
};

export default FooterInicio;
