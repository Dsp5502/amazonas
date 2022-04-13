import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { typesRegister } from '../types/types';

//* Register Asynchronous Action

export const registerAsync = (email, password, nombre) => {
  console.log(email, password, nombre);
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user);
        await updateProfile(auth.currentUser, { displayName: nombre });
        dispatch(registerSync(email, password, nombre));
        console.log('Usuario registrado');
      })
      .catch((error) => {
        console.warn(error, 'Error al registrar');
      });
  };
};

//* Register Synchronous Action
export const registerSync = (email, password, nombre) => {
  return {
    type: typesRegister.register,
    payload: {
      email,
      password,
      nombre,
    },
  };
};
