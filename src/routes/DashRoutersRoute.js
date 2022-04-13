import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Product from '../components/Product';
import AllProductos from '../components/TodosProductos/AllProductos';

const DashRoutersRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/product' element={<Product />} />
        <Route path='/productos' element={<AllProductos />} />
        <Route path='*' element={<Navigate to='/productos' />} />
      </Routes>
    </>
  );
};

export default DashRoutersRoute;
