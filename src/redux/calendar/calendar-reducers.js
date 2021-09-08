import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './calendar-actions';
import * as userActions from '../user/user-actions';

const events = createReducer([], {
  [actions.getEventsSuccess]: (_, { payload }) => payload,
  [actions.addEventSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteEventSuccess]: (state, { payload }) => state.filter(item => item._id !== payload),
  [userActions.logoutSuccess]: () => [],
});

export default combineReducers({
  events,
});
