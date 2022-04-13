import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { facebook, google } from '../../Firebase/fireBaseConfig';
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
export const loginAsync = (email, password) => {
  return async (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSync(user.email, user.password));
        console.log('Usuario Logueado');
      })
      .catch((error) => {
        console.log(error, 'No autorizado');
      });
  };
};

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

//*Login Facebook

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        //  dispatch(loginSincronico(user.email, user.password))
        console.log(user, 'Usuario autorizado facebook');
      })
      .catch((error) => {
        console.warn(error, 'No autorizado facebook');
      });
  };
};

//* Logout Synchronous
export const logoutSync = () => {
  return {
    type: typesLogin.logout,
  };
};

//* Logout ASynchronous
export const logoutAsync = () => {
  return async (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(({ user }) => {
        dispatch(logoutSync());
        console.log('Usuario deslogueado');
      })
      .catch((error) => {
        console.log(error, 'No deslogueado');
      });
  };
};
