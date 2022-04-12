import React from 'react';

const Descripcion = () => {
  return (
    <div className='p-4 flex flex-col'>
      <h1 className='font-bold text-2xl'>
        Canon EOS R6 - Cámara sin Espejo de Marco Completo + Lente RF24-105mm F4
        L IS USM
      </h1>
      <span className='text-emerald-400 py-3 '>Marca: Canon</span>
      <hr />
      <div className='flex justify-between mb-3 text-sm'>
        <p className=''>Precio:</p>
        <p className='text-red-600 '>$100,669.00</p>
        <p>
          {' '}
          <strong>Envío GRATIS.</strong>{' '}
        </p>
        <span className='text-emerald-400'>Detalles</span>
      </div>
      <p className='text-sm'>
        Hasta <strong>18 meses sin intereses</strong> de $5,592.76.{' '}
        <span className='text-emerald-400'>
          Ver mensualidades Solicita tu tarjeta Amazon Recargable
        </span>{' '}
        y obtén $100 de descuento en tu primera compra mayor a $500
      </p>
      <span className='my-2'>
        Precio: <strong>Negro</strong>{' '}
      </span>
      <span className='my-2'>
        Precio: <strong>24-105mm USM Kit</strong>{' '}
      </span>
      <hr />
      <h5 className='my-2 font-bold text-lg'>Acerca de este artículo</h5>
      <p className='my-2 text-sm leading-8'>
        - Alta calidad de imagen con un nuevo sensor CMOS de marco completo de
        20 megapíxeles. <br /> - Procesador de imagen DIGIC X con una gama ISO
        de 100-102400; ampliable a 204800.
        <br /> - Disparo continuo de alta velocidad de hasta 12 fps con
        obturador mecánico y obturador electrónico (silencioso) de hasta 20 fps.
        <br /> - CMOS AF de doble pixel, cubre aproximadamente Área 100% con
        1.053 AF. <br /> - Seguimiento de asuntos de personas y animales*
        utilizando tecnología de aprendizaje profundo.
      </p>
    </div>
  );
};

export default Descripcion;
