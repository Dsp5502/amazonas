import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarritoVacio = ({ setModalCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/productos');
    setModalCart(false);
  };

  return (
    <div className='flex flex-col justify-center items-center m-5'>
      <h2 className='text-4xl mt-5'>Carrito Vacio</h2>
      <FontAwesomeIcon className='mt-5 text-9xl' icon={faCartPlus} />
      <button
        className='my-5 font-bold border-2 p-2 text-2xl'
        onClick={() => {
          handleClick();
        }}
      >
        Agregar Articulos
      </button>
    </div>
  );
};

export default CarritoVacio;
