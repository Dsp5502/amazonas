import React from 'react';
import FormCrearCuenta from './FormCrearCuenta';

const CrearCuenta = () => {
  return (
    <div className=' w-full  flex  flex-col justify-center items-center h-screen mx-auto mt-5'>
      <div className='w-1/4  h-5/6 flex flex-col items-center justify-center '>
        <div className=' mr-2 md:mr-0 mt-2 md:mt-0 flex flex-col  justify-center  items-center my-5'>
          <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
          <img
            className='w-20 md:w-32 '
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
            alt='amazonas'
          />
        </div>
        <div className='borderEnvio w-full  flex flex-col px-5 py-2'>
          <h2 className=' text-xl mb-1'>Crear Cuenta</h2>
          <FormCrearCuenta />

          <p className='text-sm my-3'>
            Al continuar, aceptas las{' '}
            <span className='text-blue-500'>Condiciones de uso</span> y el{' '}
            <span className='text-blue-500'>Aviso de privacidad</span> de
            Amazonas{' '}
          </p>
          <span className='text-blue-500 text-sm '>¿Necesitas ayuda?</span>
        </div>
      </div>
      <footer className='border-2 border-green-500 h-1/6 w-full '>
        <div className='border-2 border-yellow-500 w-1/3 mx-auto text-sm'>
          <ul>
            <li>Condiciones de uso</li>
            <li>Aviso de privacidad</li>
            <li>Ayudar</li>
          </ul>
          <span>© 1996-2002, Amazonas.com, Inc. o sus afiliados </span>
        </div>
      </footer>
    </div>
  );
};

export default CrearCuenta;
