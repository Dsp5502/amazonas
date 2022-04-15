import React from 'react';
import FooterInicio from '../FooterInicio';
import ProductFormAdd from './ProductFormAdd';

const FormAddProduct = () => {
  return (
    <div className=' w-full  flex  flex-col justify-center items-center h-screen mx-auto mt-5'>
      <div className=' w-full px-2 md:w-3/4   h-5/6 flex flex-col items-center justify-center '>
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
          <ProductFormAdd />
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
