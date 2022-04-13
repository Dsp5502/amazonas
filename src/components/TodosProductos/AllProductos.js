import React from 'react';
import NavBar from '../NavBar';
import Cards from '../ProductRelacion/Cards';
import SubNavBar from '../SubNavBar';
import SubNavBar2 from '../SubNavBar2';

const AllProductos = () => {
  return (
    <div className='  mx-auto '>
      <NavBar />
      <SubNavBar />
      <SubNavBar2 />
      <Cards />
    </div>
  );
};

export default AllProductos;
