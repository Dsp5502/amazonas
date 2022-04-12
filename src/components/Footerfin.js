import React from 'react';

const Footerfin = () => {
  return (
    <div className='bg-slate-900 text-white py-8'>
      <div className='flex flex-col md:flex-row justify-evenly w-8/12 md:w-full px-10  text-sm md:text-base '>
        <div>
          <h1 className='font-bold'>Conócenos</h1>
          <ul className='my-8'>
            <li className='my-2'>Trabajar en Amazon </li>
            <li className='my-2'>Información corporativa</li>
            <li className='my-2'>Departamento de prensa</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold'>Gana dinero con nosotros</h1>
          <ul className='my-8'>
            <li className='my-2'>Vender en Amazon </li>
            <li className='my-2'> Vender en Amazon Handmade</li>
            <li className='my-2'>Publica tu libro en Kindle</li>
            <li className='my-2'>Programa de afiliados</li>
            <li className='my-2'>Anuncia tus productos</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold'>Podemos ayudarte</h1>
          <ul className='my-8'>
            <li className='my-2'>Amazon y COVID-19 </li>
            <li className='my-2'>Devolver o reemplazar productos</li>
            <li className='my-2'>Gestionar contenido y dispositivos</li>
            <li className='my-2'>Ayuda</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold'>Métodos de pago</h1>
          <ul className='my-8'>
            <li className='my-2'>Tarjetas de crédito y débito </li>
            <li className='my-2'>Tarjetas de regalo</li>
            <li className='my-2'>Meses sin intereses</li>
            <li className='my-2'>Amazon Cash</li>
            <li className='my-2'>Amazon Recargable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footerfin;
