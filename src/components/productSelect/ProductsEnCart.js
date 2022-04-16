import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartSync } from '../../Redux/actions/actionCart';

const ProductsEnCart = ({ carritoSinDuplicado }) => {
  const dispatch = useDispatch();

  console.log(carritoSinDuplicado);

  const borrardelCarrito = (id) => {
    console.log(id);
    dispatch(deleteCartSync(id));
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
