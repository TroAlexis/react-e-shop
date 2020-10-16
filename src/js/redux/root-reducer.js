import { combineReducers } from 'redux';

import userReducer from '~/js/redux/user/user.reducer';

export default combineReducers(
  {
    user: userReducer,
  },
);
