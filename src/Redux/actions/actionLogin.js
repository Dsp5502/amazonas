import { getAuth, signInWithPopup } from 'firebase/auth';
import { google } from '../../Firebase/fireBaseConfig';
import { typesLogin } from '../types/types';

//* Login Sincronico
export const loginSync = (email, password) => {
  return {
    type: typesLogin.login,
    payload: {
      email,
      password,
    },
  };
};

//* Login Asincronico

//* Login google
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        //  dispatch(loginSincronico(user.email, user.password))
        console.log(user, 'Usuario autorizado');
      })
      .catch((error) => {
        console.warn(error, 'No autorizado');
      });
  };
};
