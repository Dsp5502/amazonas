import {
  faAngleDown,
  faArrowRightFromBracket,
  faBars,
  faCartShopping,
  faClose,
  faLocationDot,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { urlAPI } from '../helpers/ApiUbicacion';
import { useForm } from '../hooks/useForm';
import { logoutAsync } from '../Redux/actions/actionLogin';
import {
  filterCategorySync,
  listProductAsync,
  searchProductSync,
} from '../Redux/actions/actionProduct';
import ModalCart from './productSelect/ModalCart';
import Ubicacion from './Ubicacion';

const NavBar = () => {
  const [hamburguer, setHamburguer] = useState(false);
  const [modalCart, setModalCart] = useState(false);
  const [ubicacionModal, setUbicacionModal] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((store) => store.login);

  const [values, handleInputChange] = useForm({
    busqueda: '',
    categorias: '',
  });
  const [ubicacion, setUbicacion] = useState('');
  const { region_name, zip_code, country_name, city, country_code } = ubicacion;

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
  };

  const handleHamburguer = () => {
    setHamburguer(!hamburguer);
  };

  useEffect(() => {
    dispatch(listProductAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    fetch(urlAPI)
      .then((response) => response.json())
      .then((datosUbicacion) => {
        setUbicacion(datosUbicacion);
        console.log(ubicacion);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.busqueda !== '') {
      dispatch(searchProductSync(values.busqueda));
    } else {
      dispatch(filterCategorySync(values.categorias));
    }
  };

  const modalactive = () => {
    setUbicacionModal(!ubicacionModal);
  };

  return (
    <div className=' bg-ebony-clay-500 h-28 lg:h-20 text-white flex  justify-between items-center px-4 py-2 pt-2 '>
      {modalCart && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50  '>
          <div className='w-full flex justify-center items-center '>
            <ModalCart setModalCart={setModalCart} />
          </div>
        </div>
      )}
      {hamburguer && (
        <div className='bg-ebony-clay-500 w-full  h-full p-4 absolute z-50 left-0 flex flex-col justify-center   ease-in'>
          <div className='w-full flex justify-end mt-6'>
            <FontAwesomeIcon
              className='text-xl text-white hover:text-orange-500   '
              icon={faClose}
              onClick={handleHamburguer}
            />
          </div>
          <span className='md:mx-5 text-white my-2'>Hola, {email}</span>

          <span className='flex justify-between w-full my-2'>
            Log out
            <FontAwesomeIcon
              className='text-white '
              icon={faArrowRightFromBracket}
              onClick={handleLogout}
            />
          </span>
        </div>
      )}
      {ubicacionModal && (
        <div className='bg-ebony-clay-500 w-full   top-0 absolute z-50 left-0 flex flex-col justify-start  items-center box-border  ease-in'>
          <div className='w-8/12 flex flex-col justify-center items-center py-10 '>
            <div className='w-full  flex justify-end     '>
              <FontAwesomeIcon
                className='text-xl text-white hover:text-orange-500    '
                icon={faClose}
                onClick={() => setUbicacionModal(false)}
              />
            </div>
            <div className=' '>
              <Ubicacion ubicacion={ubicacion} />
            </div>
          </div>
        </div>
      )}

      <div className=' h-12 mr-4 flex items-center  self-start md:hidden'>
        <FontAwesomeIcon
          className='text-xl hover:text-orange-peel-500  '
          icon={faBars}
          onClick={handleHamburguer}
        />
      </div>
      <div
        className=' mr-2 md:mr-0 mt-2 md:mt-0 flex flex-col  justify-center self-start md:self-center cursor-pointer'
        onClick={() => {
          navigate('/login');
        }}
      >
        <h1 className='text-sm md:text-2xl fontLogo '>Amazonas</h1>
        <img
          className='w-20 md:w-32 '
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1649562379/amazonas/image_1_mxy0eq.png'
          alt='amazonas'
        />
      </div>
      <div
        className='bg-ebony-clay-500  absolute w-full md:w-fit md:relative flex md:flex-col justify-center self-end md:self-center top-28 md:top-0 left-0  py-1 md:py-0 '
        onClick={modalactive}
      >
        <span className='hidden md:inline-block mx-10'>Entregar en</span>
        <div className='mx-5 font-bold cursor-pointer'>
          <FontAwesomeIcon icon={faLocationDot} />
          <span className='ml-2'>
            {region_name} {zip_code}{' '}
          </span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className=' flex h-10 w-80 mx-2 md:w-96 absolute md:relative text-black self-end md:self-center '
      >
        <select
          className='hidden md:flex md:w-2/6 rounded-l-full bg-white text-center outline-none'
          name='categorias'
          onChange={handleInputChange}
        >
          <option className='border-2'>Todos </option>
          <option className='border-2'>VideoJuegos</option>
          <option className='border-2'>Ropa</option>
          <option className='border-2'>Tecnologia</option>
        </select>
        <input
          className='w-4/5  md:w-4/6 rounded-l-full md:rounded-none outline-none '
          type='text'
          name='busqueda'
          onChange={handleInputChange}
        />

        <button
          type='submit'
          className='bg-orange-peel-500 flex items-center w-1/5 md:w-1/6 justify-center rounded-r-full active:bg-orange-peel-600  '
        >
          <FontAwesomeIcon
            className='text-black rounded-r-full hover:text-white'
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
      <div className='  mr-1 md:mr-0 mt-2 md:mt-0 text-sm md:text-base h-12 flex flex-col self-start md:self-center  '>
        <span className='hidden md:inline-block md:mx-5'>Hola, {email}</span>
        <div className='md:mx-5 font-bold'>
          <span className='hidden md:inline-block mr-2'>Cuentas y Listas</span>
          <FontAwesomeIcon
            className='hidden md:inline-block'
            icon={faAngleDown}
          />
        </div>
      </div>
      <div
        className='h-6  md:h-12 self-start mt-3 md:mt-0  hover:text-orange-peel-500 active:text-orange-peel-600  active:transform active:translate-y-1    flex  md:self-end'
        onClick={() => setModalCart(!modalCart)}
      >
        <FontAwesomeIcon className='h-4 md:h-6' icon={faCartShopping} />
        <span className='hidden md:flex  ml-2'>{cart.length}</span>
      </div>
      <div className=' hidden md:flex flex-col justify-center '>
        <FontAwesomeIcon
          className='text-white hover:text-orange-peel-500 active:text-orange-peel-600 active:transform active:translate-y-1  rounded-r-full'
          icon={faArrowRightFromBracket}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default NavBar;
