import React from 'react';
import NavBar from './NavBar';
import ProductoSelec from './ProductoSelec';
import SubNavBar from './SubNavBar';
import SubNavBar2 from './SubNavBar2';

const Product = () => {
  return (
    <div className='mx-auto '>
      <NavBar />
      <SubNavBar />
      <SubNavBar2 />
      <ProductoSelec />
    </div>
  );
};

export default Product;
