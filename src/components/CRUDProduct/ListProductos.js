import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductAsync,
  listProductAsync,
} from '../../Redux/actions/actionProduct';
import ModalEditar from './ModalEditar';

const ListProductos = () => {
  const [modalEditar, setModalEditar] = useState(false);
  const [editar, setEditar] = useState();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(listProductAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eliminarProduct = (id) => {
    dispatch(deleteProductAsync(id));
  };

  const editarProducto = (producto) => {
    setEditar(producto);
    setModalEditar(!modalEditar);
  };

  return (
    <>
      {modalEditar && (
        <ModalEditar editar={editar} setModalEditar={setModalEditar} />
      )}
      <div className='w-full md:w-4/5 mx-auto p-5  '>
        <h2 className='text-center font-bold text-3xl'>Listado Productos</h2>
        <div className=' mr-2 md:mr-0 mt-2 md:mt-5 flex flex-col  justify-center  items-center my-5'>
          <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
          <img
            className='w-20 md:w-32 '
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
            alt='amazonas'
          />
        </div>

        {products.map((product) => (
          <div
            key={product.id}
            className='borderEnvio p-5 my-2 bg-slate-700 text-white shadow-sm rounded-md '
          >
            <h2 className='font-bold text-amber-500 uppercase'>ID:</h2>
            <p className=' text-sm md:text-md'>{product.id}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Nombre:</h2>
            <p className=' text-sm md:text-md'>{product.nombre}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Descripcion:</h2>
            <p className=' text-sm md:text-md'>{product.descripcion}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Categorias:</h2>
            <p className=' text-sm md:text-md'>{product.categorias}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Precio:</h2>
            <p className=' text-sm md:text-md'>{product.precio}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Foto1:</h2>
            <p className=' text-sm md:text-md'>{product.foto1}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Foto2:</h2>
            <p className=' text-sm md:text-md'>{product.foto2}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Foto3:</h2>
            <p className=' text-sm md:text-md'>{product.foto3}</p>
            <div className='mx-auto  flex  m-5  w-11/12 md:w-2/3  '>
              <button
                className='w-1/2 m-2 p-2 text-center rounded-md bg-blue-300 text-white '
                onClick={() => editarProducto(product)}
              >
                Editar
              </button>
              <button
                className='w-1/2 m-2 p-2 text-center rounded-md bg-red-600 text-white '
                onClick={() => {
                  eliminarProduct(product.id);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProductos;
