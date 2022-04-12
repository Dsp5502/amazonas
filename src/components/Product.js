import React from 'react';
import Footerfin from './Footerfin';
import Historial from './HistorialBusqueda/Historial';
import NavBar from './NavBar';
import Opiniones from './OpinionesClientes/Opiniones';
import ProductoSelec from './ProductoSelec';
import ProductRelacion from './ProductRelacion';
import SubNavBar from './SubNavBar';
import SubNavBar2 from './SubNavBar2';

const Product = () => {
  return (
    <div className='  mx-auto '>
      <NavBar />
      <SubNavBar />
      <SubNavBar2 />
      <ProductoSelec />
      <ProductRelacion />
      <Historial />
      <Opiniones />
      <Footerfin />
    </div>
  );
};

export default Product;
