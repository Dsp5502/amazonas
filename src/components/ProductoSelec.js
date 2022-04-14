import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Descripcion from './productSelect/Descripcion';
import Envio from './productSelect/Envio';
import ImgSelect from './productSelect/ImgSelect';
import MinFotos from './productSelect/MinFotos';

const ProductoSelec = ({ datoProducto }) => {
  const { categorias, descripcion, foto1, foto2, foto3, nombre, precio } =
    datoProducto;
  const [fotoSelec, setFotoSelec] = useState(foto1);

  return (
    <div className=' mt-8 md:mt-0 flex flex-col mx-auto w-11/12'>
      <span className='my-4'>
        <FontAwesomeIcon icon={faChevronLeft} />
        Volver a los Resultados
      </span>
      <div className='w-full flex flex-col md:flex-row'>
        <div className=' w-full md:w-12'>
          {' '}
          <MinFotos
            foto1={foto1}
            foto2={foto2}
            foto3={foto3}
            setFotoSelec={setFotoSelec}
          />{' '}
        </div>
        <div className='w-full md:w-5/12 flex justify-center items-center'>
          <ImgSelect fotoSelec={fotoSelec} />
        </div>
        <div className='w-full md:w-4/12'>
          <Descripcion />
        </div>
        <div className='w-full md:w-2/12 my-4'>
          <Envio />
        </div>
      </div>
    </div>
  );
};

export default ProductoSelec;
