import { faCartShopping, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dateJs from 'date.js';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartSync } from '../../Redux/actions/actionCart';

const Envio = ({ datoProducto }) => {
  const { categorias, descripcion, foto1, foto2, foto3, nombre, precio } =
    datoProducto;
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
    console.log(product);
    dispatch(addCartSync(product));
  };

  return (
    <div className='borderEnvio w-11/12 flex flex-col mx-auto mt-6 py-2 justify-center px-2 '>
      <p className='text-red-600 text-2xl my-2'>${precio}</p>
      <p className='font-bold text-sm my-2'>
        Envio GRATIS.{' '}
        <span className='font-light text-emerald-400 '>Detalles</span>{' '}
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
          className='rounded-sm w-11/12 m-2 py-2 bg-amber-500  flex justify-evenly'
          onClick={() => {
            agregarCarritoProducto(datoProducto);
          }}
        >
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
