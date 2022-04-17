import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ListPedidos = () => {
  const { pedidos } = useSelector((state) => state.pedidos);
  const navigate = useNavigate();
  const volver = () => {
    navigate(-1);
  };
  return (
    <>
      <div className='w-full md:w-4/5 mx-auto p-5  '>
        <h2 className='text-center font-bold text-3xl'>Listado Pedidos</h2>
        <div className=' mr-2 md:mr-0 mt-2 md:mt-5 flex flex-col  justify-center  items-center my-5'>
          <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
          <img
            className='w-20 md:w-32 '
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
            alt='amazonas'
          />
        </div>
        <div className='p-2  cursor-pointer' onClick={volver}>
          <FontAwesomeIcon className='mr-1 ' icon={faChevronLeft} />
          Volver a Agregar Producto
        </div>
        {pedidos.map(({ values }) => (
          <div
            key={values.id}
            className='borderEnvio p-5 my-2 bg-slate-700 text-white shadow-sm rounded-md '
          >
            <h2 className='font-bold text-amber-500 uppercase'>ID Pedido:</h2>
            <p className=' text-sm md:text-md'>{values.idPedido}</p>
            <h2 className='font-bold text-amber-500 uppercase'>Nombre:</h2>
            <p className=' text-sm md:text-md'>{values.nombres}</p>
            <h2 className='font-bold text-amber-500 uppercase'>
              Numero Tarjeta:
            </h2>
            <p className=' text-sm md:text-md'>{values.cardNumber}</p>
            <h2 className='font-bold text-amber-500 uppercase'>cvc</h2>
            <p className=' text-sm md:text-md hidden'>{values.cvc}</p>
            <h2 className='font-bold text-amber-500 uppercase'>
              Fecha Vencimiento:
            </h2>
            <p className=' text-sm md:text-md'>{values.fechaVencimiento}</p>
            <h2 className='font-bold text-amber-500 uppercase'>
              Fecha Pedido:
            </h2>
            <p className=' text-sm md:text-md'>
              {values.fechaPedido.toString()}
            </p>
            <h2 className='font-bold text-amber-500 uppercase'>
              Dirección de Envio
            </h2>
            <p className=' text-sm md:text-md uppercase'>{values.domicilio}</p>

            <div className='mx-auto  flex  m-5  w-11/12 md:w-2/3  '></div>
            <h3 className='text-amber-500 uppercase font-2xl'>Articulos </h3>
            {pedidos.map((pe) =>
              pe.cart.map((ca, index) => (
                <div
                  key={ca.id}
                  className='borderEnvio p-5 my-2 bg-slate-700 text-white shadow-sm rounded-md '
                >
                  <h2># {index + 1}</h2>
                  <h2 className='font-bold text-amber-500 uppercase'>
                    Id Producto:
                  </h2>
                  <p className=' text-sm md:text-md'>{ca.id}</p>
                  <h2 className='font-bold text-amber-500 uppercase'>
                    Nombre:
                  </h2>
                  <p className=' text-sm md:text-md'>{ca.nombre}</p>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPedidos;
