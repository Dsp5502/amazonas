import React from 'react';

const MinFotos = () => {
  return (
    <div className='flex   md:flex-col justify-around md:justify-center items-center  '>
      <div className='  w-2/12  md:w-10/12 text-center md:mt-8 mb-2 border-2 border-black '>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649731913/amazonas/img-1_ycxw3u.png'
          alt='minFoto'
          className='w-full h-18'
        />
      </div>
      <div className='  w-2/12  md:w-10/12 text-center border-2 border-black mb-2  '>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649731913/amazonas/img-2_gwqqnk.png'
          alt='minFoto'
          className='w-full h-18'
        />
      </div>
      <div className=' w-2/12  md:w-10/12 text-center  border-2 border-black mb-2 '>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649731913/amazonas/img-3_k4udnf.png'
          alt='minFoto'
          className='w-full h-18'
        />
      </div>
    </div>
  );
};

export default MinFotos;
