import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const entrar = () => {
    console.log('hola');
    navigate('/product');
  };
  return (
    <div className=' w-full  flex  flex-col justify-center items-center h-screen mx-auto'>
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
          <form action='' className='flex flex-col'>
            <label htmlFor='' className='font-bold text-sm'>
              Correo electrónico
            </label>
            <input type='text' className='borderEnvio rounded-sm' />
            <label htmlFor='' className='font-bold text-sm'>
              Contraseña
            </label>
            <input type='password' className='borderEnvio rounded-sm' />
            <button
              type='submit'
              className='bg-amber-500 my-2 py-1 rounded-sm text-sm'
            >
              Continue
            </button>
          </form>
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
              Facebook
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
      <footer className='border-2 border-green-500 h-2/7 w-full '>
        <div className='border-2 border-yellow-500 w-1/3 mx-auto'>
          <ul>
            <li>Condiciones de uso</li>
            <li>Aviso de privacidad</li>
            <li>Ayudar</li>
          </ul>
          <span>© 1996-2002, Amazonas.com, Inc. o sus afiliados </span>
          <button
            onClick={() => {
              entrar();
            }}
          >
            entrar
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Login;
