import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAsync } from '../../Redux/actions/actionProduct';

import NavBar from '../NavBar';

import SubNavBar from '../SubNavBar';
import SubNavBar2 from '../SubNavBar2';
import CardsPrducts from './CardsPrducts';

const AllProductos = () => {
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
      {products.map((product) => (
        <CardsPrducts key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProductos;
