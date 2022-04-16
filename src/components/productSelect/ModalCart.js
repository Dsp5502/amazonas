import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';

import CarritoVacio from './CarritoVacio';
import ProductsEnCart from './ProductsEnCart';

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
      {cart.length > 0 ? (
        <ProductsEnCart />
      ) : (
        <CarritoVacio setModalCart={setModalCart} />
      )}

      <div className='w-full flex justify-between'>
        <p className='m-3 text-amber-500'>
          Articulos:{' '}
          <span className='text-white'>
            {' '}
            <strong>{cart.length}</strong>
          </span>
        </p>
        {cart.length > 0 && (
          <p className='m-3 text-amber-500 cursor-pointer'> Pagar</p>
        )}

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
