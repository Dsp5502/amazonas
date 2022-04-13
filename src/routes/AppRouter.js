import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrearCuenta from '../components/CrearCuenta';
import Login from '../components/Login';
import DashRoutersRoute from './DashRoutersRoute';
import PrivateRouters from './PrivateRoutes';

import PublicRouters from './PublicRouters';

const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    return <div>Checking...</div>;
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
