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
