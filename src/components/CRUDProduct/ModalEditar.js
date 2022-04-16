import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FormEditarProducto from './FormEditarProducto';

const ModalEditar = ({ editar, setModalEditar }) => {
  const cerrarModal = () => {
    setModalEditar(false);
  };

  return (
    <div className='w-full md:w-full  h-screen flex justify-center items-center bg-black bg-opacity-40 fixed  '>
      <div className='w-full md:w-3/5 bg-white  flex   flex-col justify-center items-center'>
        <div className='w-full p-5 flex justify-end '>
          {' '}
          <FontAwesomeIcon
            className='text-xl text-black pt-2   '
            icon={faClose}
            onClick={cerrarModal}
          />
        </div>
        <h2 className='text-center font-bold text-2xl'>Editar Producto</h2>
        <div className=' mr-2 md:mr-0 mt-2 md:mt-3 flex flex-col  justify-center  items-center my-5'>
          <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
        </div>
        <FormEditarProducto editar={editar} setModalEditar={setModalEditar} />
      </div>
    </div>
  );
};

export default ModalEditar;
