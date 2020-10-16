import { combineReducers } from 'redux';

import userReducer from '~/js/redux/user/user.reducer';
import cartReducer from '~/js/redux/cart/cart.reducer';

export default combineReducers(
  {
    user: userReducer,
    cart: cartReducer,
  },
);
