import React from 'react';

const Cards = () => {
  return (
    <>
      <h1 className='font-semibold text-xl md:text-3xl'>
        Productos relacionados con este artículo
      </h1>
      <div className='flex flex-col  md:flex-row p-4 '>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649741938/amazonas/Rectangle_37_tr8inp.png'
            alt=''
          />
          <p className='text-emerald-400 my-3'>
            VAK Videocamara 809 Fhd Microfono Nocturna 24mp Touch Hdmi Lente
            Gran Angular - Negro
          </p>
          <span className='flex text-red-600 my-3'> $3,449.00</span>
        </div>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649741938/amazonas/Rectangle38_i76vwq.png'
            alt=''
          />
          <p className='text-emerald-400 my-3'>
            Bigking Lente Full Fame, Aviación Aluminio 11 mm F2.8 Lente Ojo de
            pez de Enfoque Manual...
          </p>
          <span className='flex text-red-600 my-3'> $5,699.79</span>
        </div>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649741938/amazonas/Rectangle39_rwk0ev.png'
            alt=''
          />
          <p className='text-emerald-400 my-3'>
            VAK Cámara Digital Dsrl 3500 LCD 3' 24mp App Lentes Intercambiables
          </p>
          <span className='flex text-red-600 my-3'> $1,899.00 </span>
        </div>
        <div className=' w-full md:w-3/12  p-4'>
          <img
            className='w-full'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649741938/amazonas/Rectangle312_yafdgi.png'
            alt=''
          />
          <p className='text-emerald-400 my-3'>
            Lente Manual Ojo de pez Full Fame TTArtisan Aviation Aluminio 11 mm
            F2.8 Marco Completo...
          </p>
          <span className='flex text-red-600 my-3'> $8,329.00</span>
        </div>
      </div>
    </>
  );
};

export default Cards;
