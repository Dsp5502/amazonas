import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducers } from '../reducers/cartReducers';
import { loginReducers } from '../reducers/loginReducer';
import { pedidosReducers } from '../reducers/PedidosReducers';
import { productReducer } from '../reducers/productReducer';
import { registerReducers } from '../reducers/registerReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose();

const reducers = combineReducers({
  login: loginReducers,
  register: registerReducers,
  product: productReducer,
  cart: cartReducers,
  pedidos: pedidosReducers,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
