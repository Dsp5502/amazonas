import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CrearCuenta from '../components/CrearCuenta';
import Login from '../components/Login';
import Product from '../components/Product';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/registrarse' element={<CrearCuenta />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
