import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './Redux/store/store';
import AppRouter from './routes/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//TODO:
//1. Crear una nueva ruta para el admin
//2. crear collection de productos
//3. revisar bien el responsive
