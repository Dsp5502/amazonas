import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAsync } from '../../Redux/actions/actionProduct';

import NavBar from '../NavBar';
import ProductoSelec from '../ProductoSelec';

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
    <div className='  mx-auto border-2 border-red-700 '>
      <NavBar />
      <SubNavBar />
      <SubNavBar2 />
      {prueba ? (
        <div className='flex'>
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
        <ProductoSelec datoProducto={datoProducto} setPrueba={setPrueba} />
      )}
    </div>
  );
};

export default AllProductos;
