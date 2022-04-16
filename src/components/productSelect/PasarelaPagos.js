import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatosPago from './DatosPago';

const PasarelaPagos = () => {
  const { cart } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  let suma = 0;
  cart.map((ca) => (suma = suma + Number(ca.precio)));
  return (
    <div className='  mx-auto  '>
      <div className='  container mx-auto md:my-5 '>
        <h2 className='text-center font-bold text-4xl'>Resumen Compra</h2>
        <span
          className='my-4 cursor-pointer mx-5'
          onClick={() => {
            navigate('/productos');
          }}
        >
          <FontAwesomeIcon className='mr-1' icon={faChevronLeft} />
          Volver a los Resultados
        </span>
        <div className='w-full flex flex-col md:flex-row mt-5'>
          <div className='w-1/2 shadow-2xl mx-2 rounded-md'>
            <h3 className='font-bold text-center text-3xl mt-2 text-amber-500'>
              Detalle Productos
            </h3>
            <div className='w-full flex flex-col md:flex-row'>
              <div>
                <table className='border-collapse m-5'>
                  <tr className=''>
                    <th className='border-2 p-3'>Foto</th>
                    <th className='border-2 p-3'>Nombre</th>
                    <th className='border-2 p-3'>Precio</th>
                  </tr>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className='border-2 p-3'>
                        <img className='w-10 h-10' src={item.foto1} alt='' />
                      </td>
                      <td className='border-2 p-3'>{item.nombre}</td>
                      <td className='border-2 p-3'>{item.precio}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className='border-2 p-3'></td>
                    <td className='border-2 p-3'>Total</td>
                    <td className='border-2 p-3'>${suma.toFixed(2)} </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex flex-col justify-center  shadow-2xl  mx-2 bg-slate-700 rounded-md'>
            <h3 className='font-bold text-center mt-2 text-3xl text-amber-500'>
              Datos de Pago
            </h3>
            <DatosPago cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasarelaPagos;
