import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { listProductAsync } from '../Redux/actions/actionProduct';
import Descripcion from './productSelect/Descripcion';
import Envio from './productSelect/Envio';
import ImgSelect from './productSelect/ImgSelect';
import MinFotos from './productSelect/MinFotos';

const ProductoSelec = ({ datoProducto, setPrueba }) => {
  const { categorias, descripcion, foto1, foto2, foto3, nombre, precio } =
    datoProducto;
  const [fotoSelec, setFotoSelec] = useState(foto1);
  const dispatch = useDispatch();

  return (
    <div className=' mt-8 md:mt-0 flex flex-col mx-auto w-11/12 '>
      <span
        className='my-4 cursor-pointer hover:text-orange-peel-500'
        onClick={() => {
          setPrueba(true);
          dispatch(listProductAsync());
        }}
      >
        <FontAwesomeIcon className='mr-1' icon={faChevronLeft} />
        Volver a los Resultados
      </span>
      <div className='w-full flex flex-col lg:flex-row'>
        <div className=' w-full lg:w-12 cursor-pointer'>
          {' '}
          <MinFotos
            foto1={foto1}
            foto2={foto2}
            foto3={foto3}
            setFotoSelec={setFotoSelec}
          />{' '}
        </div>
        <div className='w-full lg:w-5/12 mt-5 md:mt-2 flex justify-center items-start'>
          <ImgSelect fotoSelec={fotoSelec} />
        </div>
        <div className='w-full lg:w-4/12'>
          <Descripcion
            descripcion={descripcion}
            nombre={nombre}
            precio={precio}
            categorias={categorias}
          />
        </div>
        <div className='w-full lg:w-2/12 my-4'>
          <Envio datoProducto={datoProducto} />
        </div>
      </div>
    </div>
  );
};

export default ProductoSelec;
