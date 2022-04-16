import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginFacebook, loginGoogle } from '../Redux/actions/actionLogin';
import FooterInicio from './FooterInicio';
import { FormLogin } from './FormLogin';

const Login = () => {
  const dispatch = useDispatch();
  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };
  return (
    <div className=' w-full  flex  flex-col justify-center items-center h-screen mx-auto mt-5'>
      <div className='w-11/12 md:w-2/4 lg:w-1/4   h-5/6 flex flex-col items-center justify-center '>
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
              type='button'
              className='w-1/2  mr-2 rounded-sm btnGoogle active:transform active:translate-y-1  shadow-md '
              onClick={handleGoogle}
            >
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button
              type='submit'
              className='w-1/2    rounded-sm btnFacebook active:transform active:translate-y-1  shadow-md'
              onClick={handleFacebook}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </button>
          </div>

          <p className='text-xs md:text-sm my-1'>
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
            <FontAwesomeIcon icon={faCaretRight} />
            ¿Necesitas ayuda?
          </span>
        </div>
        <div className='text-sm flex flex-col items-center w-full my-3'>
          <p className=''>
            <span>¿Nuevo en Amazonas?</span>
          </p>
          <Link to='/registrarse' className='w-full  '>
            <button
              type='submit'
              className='w-full bg-gray-400  my-2 py-1 rounded-sm btnCuentaNueva active:transform active:translate-y-1  shadow-xl '
            >
              Crea tu cuenta de Amazonas
            </button>
          </Link>
          <Link
            to='/admin'
            className='font-Bold uppercase text-white hover:text-black'
          >
            Admin - Login
          </Link>
        </div>
      </div>
      <FooterInicio />
    </div>
  );
};

export default Login;
