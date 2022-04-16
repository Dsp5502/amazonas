import { faClose, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartSync, deleteCartSync } from '../../Redux/actions/actionCart';

const ProductsEnCart = ({ carritoSinDuplicado }) => {
  const dispatch = useDispatch();

  const borrardelCarrito = (id) => {
    dispatch(deleteCartSync(id));
  };

  const agregarCarritoProducto = (product) => {
    dispatch(addCartSync(product));
  };

  return (
    <>
      {carritoSinDuplicado.map((item) => (
        <div key={item.id}>
          <hr />
          <div className='w-full flex '>
            <img className='w-1/5 p-4' src={item.foto1} alt='' />
            <div className='w-3/5 p-4'>
              <h3 className='font-bold'>{item.nombre}</h3>
              <p>En stock</p>
            </div>
            <div className='w-1/5 py-4 px-2'>
              <span>
                {item.cantidad} X ${item.precio}
              </span>
              <div className='  flex  justify-center bg-green-700 py-1 w-2/3 mt-2 '>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    agregarCarritoProducto(item);
                  }}
                />
              </div>
            </div>
            <FontAwesomeIcon
              className='text-red-400 p-4 text-2xl '
              icon={faClose}
              onClick={() => borrardelCarrito(item.id)}
            />
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ProductsEnCart;
