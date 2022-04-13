import { typesRegister } from '../types/types';

export const registerReducers = (state = {}, action) => {
  switch (action.type) {
    case typesRegister.register:
      return {
        nombre: action.payload.nombre,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
