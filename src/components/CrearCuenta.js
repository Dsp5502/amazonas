import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterInicio from './FooterInicio';
import FormCrearCuenta from './FormCrearCuenta';

const CrearCuenta = () => {
  const navigate = useNavigate();

  const volver = () => {
    navigate('/login');
  };

  return (
    <div className=' w-full  flex  flex-col justify-center items-center h-screen mx-auto mt-5'>
      <div className='w-11/12 md:w-2/4 lg:w-1/4 h-5/6 flex flex-col items-center justify-center my-2 '>
        <div className=' mr-2 md:mr-0 mt-2 md:mt-0 flex flex-col  justify-center  items-center my-5'>
          <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
          <img
            className='w-20 md:w-32 '
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
            alt='amazonas'
          />
        </div>
        <div
          className='p-2 w-full flex items-center  cursor-pointer active:transform active:translate-y-1  hover:text-orange-peel-500'
          onClick={volver}
        >
          <FontAwesomeIcon className='mr-1  ' icon={faChevronLeft} />
          Volver
        </div>
        <div className='borderEnvio w-full  flex flex-col  px-5 py-2'>
          <h2 className=' text-xl mb-1'>Crear Cuenta</h2>
          <FormCrearCuenta />

          <p className='text-sm my-3'>
            Al continuar, aceptas las{' '}
            <span className='text-blue-500 cursor-pointer hover:text-black'>
              Condiciones de uso
            </span>{' '}
            y el{' '}
            <span className='text-blue-500 cursor-pointer hover:text-black'>
              Aviso de privacidad
            </span>{' '}
            de Amazonas{' '}
          </p>
          <span className='text-blue-500 text-sm cursor-pointer hover:text-black '>
            ¿Necesitas ayuda?
          </span>
        </div>
      </div>
      <FooterInicio />
    </div>
  );
};

export default CrearCuenta;
