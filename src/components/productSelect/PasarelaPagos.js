import React from 'react';
import { useSelector } from 'react-redux';
import DatosPago from './DatosPago';

const PasarelaPagos = () => {
  const { cart } = useSelector((store) => store.cart);
  let suma = 0;
  cart.map((ca) => (suma = suma + Number(ca.precio)));
  return (
    <div className='  mx-auto  '>
      <div className='  container mx-auto md:my-5 '>
        <h2 className='text-center font-bold text-4xl'>Resumen Compra</h2>
        <div className='w-full flex flex-col md:flex-row mt-5'>
          <div className='w-1/2 shadow-2xl mx-2 rounded-md'>
            <h3 className='font-bold text-center text-3xl text-amber-500'>
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
          <div className='w-1/2  shadow-2xl  mx-2 bg-slate-700 rounded-md'>
            <DatosPago />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasarelaPagos;
