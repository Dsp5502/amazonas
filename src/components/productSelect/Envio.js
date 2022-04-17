import { faCartShopping, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dateJs from 'date.js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addCartSync } from '../../Redux/actions/actionCart';

const Envio = ({ datoProducto }) => {
  const { precio } = datoProducto;
  const dispatch = useDispatch();
  const diaPasado = dateJs('5 days after');
  const diaPasadoFin = dateJs('7 days after');
  const diaAprox = diaPasado.getMonth() + 1;
  let dia;
  switch (diaAprox) {
    case 1:
      dia = `Enero,  
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 2:
      dia = `Feb,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 3:
      dia = `Marzo,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 4:
      dia = `Abril,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 5:
      dia = `Mayo,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 6:
      dia = `Junio,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 7:
      dia = `Julio,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 8:
      dia = `Agost,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 9:
      dia = `Sept,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 10:
      dia = `Oct,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 11:
      dia = `Nov,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    case 12:
      dia = `Dic,
        ${diaPasado.getDate()} - ${diaPasadoFin.getDate()}`;
      break;

    default:
      break;
  }

  const agregarCarritoProducto = (product) => {
    dispatch(addCartSync(product));
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
      title: 'Agregado al carrito',
    });
  };

  return (
    <div className='borderEnvio w-11/12 flex flex-col mx-auto mt-6 py-2 justify-center px-2 '>
      <p className='text-red-600 text-2xl my-2'>${precio}</p>
      <p className='font-bold text-sm my-2'>
        Envio GRATIS.{' '}
        <span className='font-light text-blue-400 '>Detalles</span>{' '}
      </p>
      <p className='my-2'>
        Llega :{' '}
        <span>
          {' '}
          <strong>{dia}</strong>{' '}
        </span>{' '}
      </p>

      <div>
        <button
          className='rounded-sm w-11/12 m-2 py-2 btnOrange  flex justify-evenly'
          onClick={() => {
            agregarCarritoProducto(datoProducto);
          }}
        >
          <FontAwesomeIcon className='  ' icon={faCartShopping} />
          <span className='text-xs'> Agregar al Carrito</span>
        </button>
        <Link
          to={'/pagar'}
          className='rounded-sm w-11/12 m-2 p-2 btnOrange flex justify-evenly'
          onClick={() => {
            agregarCarritoProducto(datoProducto);
          }}
        >
          <FontAwesomeIcon className='  ' icon={faPlay} />
          <span className='text-xs'> Comprar Ahora</span>
        </Link>
      </div>
      <span className='text-blue-500 text-center'>Transacción segura</span>
    </div>
  );
};

export default Envio;
