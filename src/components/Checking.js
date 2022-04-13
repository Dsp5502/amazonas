import React from 'react';

const Checking = () => {
  return (
    <div className=' mr-2 md:mr-0 mt-2 md:mt-0 flex flex-col h-screen  w-full justify-center  items-center my-5'>
      <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
      <img
        className='w-20 md:w-32 '
        src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
        alt='amazonas'
      />
      <span className='mt-8 font-bold text-5xl '>Checking...</span>
    </div>
  );
};

export default Checking;
