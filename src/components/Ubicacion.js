import React, { useEffect } from 'react';

const Ubicacion = ({ ubicacion }) => {
  const { region_name, zip_code, country_name, city, country_code } = ubicacion;

  return (
    <>
      <h1 className='font-bold mb-5 pt-1 text-3xl'>Selecciona tu Ubicación</h1>
      <hr />
      <p className='my-2'>
        Las opciones de entrega y las velocidades de entrega pueden variar según
        la ubicación
      </p>
      <div className='borderEnvio flex flex-col'>
        <p className=''>
          Entregar a <span className=''>nombre</span>{' '}
        </p>
        <p className=''>
          Pais: <span className=''>{country_name}</span>{' '}
        </p>
        <p className=''>
          Ciudad:{' '}
          <span className=''>
            {city} {region_name}
          </span>{' '}
        </p>
        <p className=''>
          Codigo Postal{' '}
          <span className=''>
            {zip_code} {country_code}
          </span>{' '}
        </p>
      </div>
      <h3>O ingrese su dirección</h3>
      <form className='flex flex-col'>
        <input type='text' placeholder='Dirección' />
      </form>
    </>
  );
};

export default Ubicacion;
