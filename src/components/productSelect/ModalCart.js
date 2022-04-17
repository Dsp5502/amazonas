import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyCartSync } from '../../Redux/actions/actionCart';
import CarritoVacio from './CarritoVacio';
import ProductsEnCart from './ProductsEnCart';

const ModalCart = ({ setModalCart }) => {
  const { cart } = useSelector((store) => store.cart);
  const [carritoSinDuplicado, setcarritoSinDuplicado] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const carritoSinDuplicado = cart.filter(
      (car, index, self) => index === self.findIndex((t) => t.id === car.id)
    );
    carritoSinDuplicado.map((item) => {
      item.cantidad = cart.filter((car) => car.id === item.id).length;
      return item;
    });

    setcarritoSinDuplicado(carritoSinDuplicado);
  }, [cart]);

  let suma = 0;
  const volver = () => {
    setModalCart(false);
  };
  const vaciarCarrito = () => {
    dispatch(emptyCartSync());
    setModalCart(false);
  };

  cart.map((ca) => (suma = suma + Number(ca.precio)));

  return (
    <div className='  w-screen lg:w-2/3 bg-ebony-clay-500 flex flex-col px-5  rounded-md  py-5 h-screen  overflow-y-scroll	 '>
      <div>
        <h2 className='text-4xl mr-4 my-5 uppercase'>Carrito de Compras</h2>
        <div
          className='p-2 flex  items-center justify-between  cursor-pointer '
          onClick={volver}
        >
          <div className='hover:text-orange-peel-500'>
            <FontAwesomeIcon className='mr-1  ' icon={faChevronLeft} />
            Volver
          </div>
          <span className='hover:text-red-500' onClick={vaciarCarrito}>
            Vaciar Carrito
          </span>
        </div>
      </div>
      {cart.length > 0 ? (
        <ProductsEnCart carritoSinDuplicado={carritoSinDuplicado} />
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
          <p
            className='m-3 hover:text-orange-peel-500 font-bold uppercase cursor-pointer'
            onClick={() => {
              setModalCart(false);
              navigate('/pagar');
            }}
          >
            {' '}
            Pagar
          </p>
        )}

        <p className='m-3 text-amber-500'>
          Subtotal:{' '}
          <span className='text-white'>
            {' '}
            <strong>{suma.toFixed(2)}</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModalCart;
