import { typesPedidos } from '../types/types';

const initialState = {
  pedidos: [],
};

export const pedidosReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesPedidos.addPedido:
      return {
        pedidos: [...state.pedidos, action.payload],
      };
    case typesPedidos.listPedido:
      return {
        pedidos: [...action.payload],
      };
    case typesPedidos.deletePedido:
      return {
        pedidos: state.pedidos.filter((pedido) => pedido.id !== action.payload),
      };
    default:
      return state;
  }
};
