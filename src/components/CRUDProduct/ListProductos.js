import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAsync } from '../../Redux/actions/actionProduct';

const ListProductos = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  console.log(products);
  useEffect(() => {
    dispatch(listProductAsync());
  }, []);

  return (
    <div className='w-4/5 mx-auto p-5  '>
      <h2 className='text-center font-bold text-3xl'>Listado Productos</h2>

      {products.map((product) => (
        <div
          key={product.id}
          className='borderEnvio p-5 my-2 bg-slate-700 text-white shadow-sm rounded-md '
        >
          <h2 className='font-bold text-amber-500 uppercase'>ID:</h2>
          <p className='text-md'>{product.id}</p>
          <h2 className='font-bold text-amber-500 uppercase'>Nombre:</h2>
          <p className='text-md'>{product.nombre}</p>
          <h2 className='font-bold text-amber-500 uppercase'>Descripcion:</h2>
          <p className='text-md'>{product.descripcion}</p>
          <h2 className='font-bold text-amber-500 uppercase'>Categorias:</h2>
          <p className='text-md'>{product.categorias}</p>
          <h2 className='font-bold text-amber-500 uppercase'>Precio:</h2>
          <p className='text-md'>{product.precio}</p>
          <h2 className='font-bold text-amber-500 uppercase'>Foto1:</h2>
          <p className='text-md'>{product.foto1}</p>
          <h2 className='font-bold text-amber-500 uppercase'>Foto2:</h2>
          <p className='text-md'>{product.foto2}</p>
          <h2 className='font-bold text-amber-500 uppercase'>Foto3:</h2>
          <p className='text-md'>{product.foto3}</p>
          <div className='mx-auto  flex  m-5 w-2/3  '>
            <button className='w-1/2 m-2 p-2 text-center rounded-md bg-blue-300 text-white '>
              Editar
            </button>
            <button className='w-1/2 m-2 p-2 text-center rounded-md bg-red-600 text-white '>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProductos;
