import { typesRegister } from '../types/types';

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
