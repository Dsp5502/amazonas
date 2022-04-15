import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ModalCart = ({ setModalCart }) => {
  const { cart } = useSelector((store) => store.cart);

  console.log(cart);
  let suma = 0;
  const volver = () => {
    setModalCart(false);
    console.log('volver');
  };
  cart.map((ca) => (suma = suma + Number(ca.precio)));
  console.log(suma);
  return (
    <div className='w-2/3 bg-slate-700 flex flex-col px-5  rounded-md  py-5 h-screen  overflow-y-scroll	 '>
      <div>
        <h2 className='text-4xl mr-4 my-5'>Carrito De compras</h2>
        <div className='p-2  cursor-pointer text-amber-500' onClick={volver}>
          <FontAwesomeIcon className='mr-1  ' icon={faChevronLeft} />
          Volver
        </div>
      </div>
      {cart.map((item) => (
        <div key={item.id}>
          <hr />
          <div className='w-full flex '>
            <img className='w-1/5 p-4' src={item.foto1} alt='' />
            <div className='w-3/5 p-4'>
              <h3 className='font-bold'>{item.nombre}</h3>
              <p>En stock</p>
            </div>
            <div className='w-1/5 p-4'>
              <span>${item.precio}</span>
            </div>
            <button>Eliminar</button>
          </div>
          <hr />
        </div>
      ))}

      <div className='w-full flex justify-between'>
        <p className='m-3 text-amber-500'>
          Articulos:{' '}
          <span className='text-white'>
            {' '}
            <strong>{cart.length}</strong>
          </span>
        </p>
        <p className='m-3 text-amber-500'>
          Subtotal:{' '}
          <span className='text-white'>
            {' '}
            <strong>{suma.toFixed(3)}</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModalCart;
