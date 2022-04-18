import React from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../hooks/useForm';

const Ubicacion = ({
  ubicacion,
  email,
  setDireccion,
  setDirecModi,
  setUbicacionModal,
  direcModi,
  direccion,
}) => {
  const { region_name, zip_code, country_name, city, country_code } = ubicacion;

  const [values, handleInputChange, reset] = useForm({
    direccion: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.direccion !== '') {
      setDireccion(values.direccion);
      setDirecModi(true);
      setUbicacionModal(false);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Dirección actualizada',
      });
      reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar una dirección',
      });
    }
  };

  return (
    <>
      <h1 className='font-bold mb-5 pt-1 text-3xl'>Selecciona tu Ubicación</h1>
      <hr />
      <p className='my-2'>
        Las opciones de entrega y las velocidades de entrega pueden variar según
        la ubicación
      </p>
      {direcModi ? (
        <div className='borderEnvio flex flex-col py-5 text-orange-peel-500'>
          <p className=''>
            Entregar a: <span className='text-white'>{email}</span>{' '}
          </p>
          <p>
            Dirección: <span className='text-white'>{direccion}</span>{' '}
          </p>
        </div>
      ) : (
        <div className='borderEnvio flex flex-col'>
          <p className=''>
            Entregar a: <span className=''>{email}</span>{' '}
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
            Codigo Postal:{' '}
            <span className=''>
              {country_code} {zip_code}
            </span>{' '}
          </p>
        </div>
      )}
      <h3 className='my-5 text-center'>O Ingrese su dirección</h3>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type='text'
          name='direccion'
          placeholder='Dirección'
          className='bg-ebony-clay border-2 border-white px-2 text-orange-peel-500'
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

export default Ubicacion;
