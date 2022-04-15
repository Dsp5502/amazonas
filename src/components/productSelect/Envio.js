import { faCartShopping, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Envio = ({ precio }) => {
  return (
    <div className='borderEnvio w-11/12 flex flex-col mx-auto mt-6 py-2 justify-center px-2 '>
      <p className='text-red-600 text-2xl my-2'>${precio}</p>
      <p className='font-bold text-sm my-2'>
        Envio GRATIS.{' '}
        <span className='font-light text-emerald-400 '>Detalles</span>{' '}
      </p>
      <p className='my-2'>
        Llega:{' '}
        <span>
          {' '}
          <strong>dic 25- 28</strong>{' '}
        </span>{' '}
      </p>
      <p className='text-red-600 text-sm my-3'>
        Puede que lo recibas después de Navidados
      </p>
      <div>
        <div></div>

        <button className='rounded-sm w-11/12 m-2 py-2 bg-amber-500  flex justify-evenly'>
          <FontAwesomeIcon
            className='text-white bg-gray-500 '
            icon={faCartShopping}
          />
          <span className='text-xs'> Agregar al Carrito</span>
        </button>
        <button className='rounded-sm w-11/12 m-2 p-2 bg-amber-500 flex justify-evenly'>
          <FontAwesomeIcon className='text-white bg-gray-500 ' icon={faPlay} />
          <span className='text-xs'> Comprar Ahora</span>
        </button>
      </div>
      <span className='text-blue-500 text-center'>Transacción segura</span>
    </div>
  );
};

export default Envio;
