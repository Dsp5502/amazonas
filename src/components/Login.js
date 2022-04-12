import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterInicio from './FooterInicio';
import { FormLogin } from './FormLogin';

const Login = () => {
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
          <h2 className=' text-xl mb-1'>Ingresar</h2>
          <FormLogin />
          <div className='w-full flex mb-1'>
            <button
              type='submit'
              className='w-1/2  mr-2 rounded-sm text-white bg-red-600 py-1'
            >
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button
              type='submit'
              className='w-1/2 bg-blue-600  py-1 rounded-sm text-white'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </button>
          </div>

          <p className='text-sm my-3'>
            Al continuar, aceptas las{' '}
            <span className='text-blue-500'>Condiciones de uso</span> y el{' '}
            <span className='text-blue-500'>Aviso de privacidad</span> de
            Amazonas{' '}
          </p>
          <span className='text-blue-500 text-sm '>
            <FontAwesomeIcon icon={faCaretRight} />
            ¿Necesitas ayuda?
          </span>
        </div>
        <div className='text-sm flex flex-col items-center w-full my-3'>
          <p className=''>
            <span>¿nuevo en amazon?</span>
          </p>

          <button
            type='submit'
            className='w-full bg-gray-400  my-2 py-1 rounded-sm text-white '
          >
            Crea tu cuenta de Amazonas
          </button>
        </div>
      </div>
      <FooterInicio />
    </div>
  );
};

export default Login;
