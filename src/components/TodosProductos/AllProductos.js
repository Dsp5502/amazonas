import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAsync } from '../../Redux/actions/actionProduct';
import Footerfin from '../Footerfin';
import Historial from '../HistorialBusqueda/Historial';

import NavBar from '../NavBar';
import Opiniones from '../OpinionesClientes/Opiniones';
import ProductoSelec from '../ProductoSelec';
import ProductRelacion from '../ProductRelacion';

import SubNavBar from '../SubNavBar';
import SubNavBar2 from '../SubNavBar2';
import CardsPrducts from './CardsPrducts';

const AllProductos = () => {
  const [prueba, setPrueba] = useState(true);
  const [datoProducto, setDatoProducto] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  console.log(products);
  useEffect(() => {
    dispatch(listProductAsync());
  }, []);

  return (
    <div className='  mx-auto  '>
      <NavBar />
      <SubNavBar />
      <SubNavBar2 />
      {prueba ? (
        <div className='flex flex-wrap px-10'>
          {products.map((product) => (
            <CardsPrducts
              key={product.id}
              product={product}
              setPrueba={setPrueba}
              setDatoProducto={setDatoProducto}
            />
          ))}
        </div>
      ) : (
        <>
          <ProductoSelec datoProducto={datoProducto} setPrueba={setPrueba} />
          <ProductRelacion />
          <Historial />
          <Opiniones />
        </>
      )}
      <Footerfin />
    </div>
  );
};

export default AllProductos;
