import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormLoginAdmin } from './FormAdminLogin';

const AdminLogin = ({ setIsAdminLog }) => {
  const navigate = useNavigate();

  const volver = () => {
    navigate('/login');
  };
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
        <div className='borderEnvio   md:w-full  flex flex-col px-5 py-2'>
          <h2 className=' text-xl mb-1'>Ingresar Admin</h2>
          <FormLoginAdmin setIsAdminLog={setIsAdminLog} />
        </div>
        <div
          className='p-2 w-full flex items-center  cursor-pointer hover:text-orange-peel-500 active:transform active:translate-y-1'
          onClick={volver}
        >
          <FontAwesomeIcon className='mr-1 ' icon={faChevronLeft} />
          Volver
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
