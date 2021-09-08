import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './user-actions';

const initialValue = { name: null, email: null };

const userInfo = createReducer(initialValue, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialValue,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

export default combineReducers({
  userInfo,
  token,
});
