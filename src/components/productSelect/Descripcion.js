import React from 'react';

const Descripcion = ({ descripcion, precio, nombre, categorias }) => {
  const cuotas = (Number(precio) / 18).toFixed(3);

  console.log(cuotas);

  return (
    <div className='p-4 flex flex-col'>
      <h1 className='font-bold text-2xl'>{nombre}</h1>
      <span className='text-emerald-400 py-3 '>Categoria: {categorias}</span>
      <hr />
      <div className='flex justify-between mb-3 text-sm'>
        <p className=''>Precio:</p>
        <p className='text-red-600 '>{precio}</p>
        <p>
          {' '}
          <strong>Envío GRATIS.</strong>{' '}
        </p>
        <span className='text-emerald-400'>Detalles</span>
      </div>
      <p className='text-sm'>
        Hasta <strong>18 meses sin intereses</strong> de ${cuotas}{' '}
        <span className='text-emerald-400'>
          Ver mensualidades Solicita tu tarjeta Amazon Recargable
        </span>{' '}
        y obtén $100 de descuento en tu primera compra mayor a $500
      </p>
      <span className='my-2'>
        Color: <strong>Negro</strong>{' '}
      </span>
      <span className='my-2'>
        Precio: $<strong>{precio}</strong>{' '}
      </span>
      <hr />
      <h5 className='my-2 font-bold text-lg'>Acerca de este artículo</h5>
      <p className='my-2 text-sm leading-8'>{descripcion}</p>
    </div>
  );
};

export default Descripcion;
