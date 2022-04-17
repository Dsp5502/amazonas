import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategorySync } from '../../Redux/actions/actionProduct';

const Cards = ({ datoProducto }) => {
  const { products } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCategorySync(datoProducto.categorias));
  }, []);

  return (
    <>
      <h1 className='font-semibold text-xl md:text-3xl mb-5'>
        Productos relacionados con este artículo
      </h1>
      <hr />
      <div className='flex flex-col  md:flex-row p-4 '>
        {products.map((pr) => (
          <div className=' w-full md:w-3/12   p-4'>
            <img className='w-full h-72' src={pr.foto1} alt={pr.foto1} />
            <p className='text-blue-400 my-3'>{pr.nombre}</p>
            <span className='flex text-black my-3'> ${pr.precio}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
