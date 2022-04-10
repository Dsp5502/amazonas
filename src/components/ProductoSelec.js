import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Descripcion from './productSelect/Descripcion';
import Envio from './productSelect/Envio';
import ImgSelect from './productSelect/ImgSelect';
import MinFotos from './productSelect/MinFotos';

const ProductoSelec = () => {
  return (
    <div className='border-2 border-red-800 mt-8 md:mt-0 flex flex-col mx-auto w-11/12'>
      <span className='my-4'>
        <FontAwesomeIcon icon={faChevronLeft} />
        Volver a los Resultados
      </span>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='border-2 border-blue-900 w-1/12'>
          {' '}
          <MinFotos />{' '}
        </div>
        <div className='border-2 border-blue-900 w-6/12 flex justify-center items-center'>
          <ImgSelect />
        </div>
        <div className='border-2 border-blue-900 w-3/12'>
          <Descripcion />
        </div>
        <div className='border-2 border-blue-900 w-2/12'>
          <Envio />
        </div>
      </div>
    </div>
  );
};

export default ProductoSelec;
