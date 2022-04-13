import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checking from '../components/Checking';
import CrearCuenta from '../components/CrearCuenta';
import AdminLogin from '../components/CRUDProduct/AdminLogin';
import FormAddProduct from '../components/CRUDProduct/FormAddProduct';
import Login from '../components/Login';
import AdminRouters from './AdminRouters';
import DashRoutersRoute from './DashRoutersRoute';
import PrivateRouters from './PrivateRoutes';
import PublicRouters from './PublicRouters';

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLog, setIsAdminLog] = useState(false);
  const [isAdminLogOut, setIsAdminLogOut] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    console.log(auth);
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return <Checking />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRouters isLoggedIn={isLoggedIn}>
              <Login />
            </PublicRouters>
          }
        />
        <Route
          path='/registrarse'
          element={
            <PublicRouters isLoggedIn={isLoggedIn}>
              <CrearCuenta />
            </PublicRouters>
          }
        />
        <Route
          path='/admin'
          element={
            <PublicRouters isLoggedIn={isLoggedIn}>
              <AdminLogin setIsAdminLog={setIsAdminLog} />
            </PublicRouters>
          }
        />

        <Route
          path='/addProduct'
          element={
            <AdminRouters isAdminLog={isAdminLog}>
              <FormAddProduct />
            </AdminRouters>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRouters isLoggedIn={isLoggedIn}>
              <DashRoutersRoute />
            </PrivateRouters>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
