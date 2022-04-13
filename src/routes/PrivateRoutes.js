import { Navigate } from 'react-router-dom';

const PrivateRouters = ({ isLoggedIn, children }) => {
  console.log('hola');
  return isLoggedIn ? children : <Navigate to='/login' />;
};

export default PrivateRouters;
