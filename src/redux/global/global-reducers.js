import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as userActions from '../user/user-actions';
import * as calendarActions from '../calendar/calendar-actions';
import * as globalActions from './global-actions';

const isLoading = createReducer(false, {
  [userActions.registerRequest]: () => true,
  [userActions.loginRequest]: () => true,
  [userActions.logoutRequest]: () => true,
  [userActions.getCurrentUserRequest]: () => true,

  [calendarActions.addEventRequest]: () => true,
  [calendarActions.deleteEventRequest]: () => true,
  [calendarActions.getEventsRequest]: () => true,

  [userActions.registerSuccess]: () => false,
  [userActions.loginSuccess]: () => false,
  [userActions.logoutSuccess]: () => false,
  [userActions.getCurrentUserSuccess]: () => false,

  [calendarActions.addEventSuccess]: () => false,
  [calendarActions.deleteEventSuccess]: () => false,
  [calendarActions.getEventsSuccess]: () => false,

  [userActions.registerError]: () => false,
  [userActions.loginError]: () => false,
  [userActions.logoutError]: () => false,
  [userActions.getCurrentUserError]: () => false,

  [calendarActions.addEventError]: () => false,
  [calendarActions.deleteEventError]: () => false,
  [calendarActions.getEventsError]: () => false,
});

const isModalAddEventOpen = createReducer(false, {
  [globalActions.openModalAddEvent]: () => true,
  [globalActions.closeModalAddEvent]: () => false,
});

export default combineReducers({
  isLoading,
  isModalAddEventOpen,
});
