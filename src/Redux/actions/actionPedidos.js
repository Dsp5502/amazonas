import { typesPedidos } from '../types/types';

//* AddPedidos
export const addPedidos = (pedidos) => {
  return {
    type: typesPedidos.addPedido,
    payload: pedidos,
  };
};
