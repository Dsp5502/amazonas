import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const entrar = () => {
    console.log('hola');
    navigate('/product');
  };
  return (
    <div>
      Login
      <button
        onClick={() => {
          entrar();
        }}
      >
        entrar
      </button>
    </div>
  );
};

export default Login;
