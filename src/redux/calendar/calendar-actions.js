import { createAction } from '@reduxjs/toolkit';

export const addEventRequest = createAction('events/addEventRequest');
export const addEventSuccess = createAction('events/addEventSuccess');
export const addEventError = createAction('events/addEventError');

export const deleteEventRequest = createAction('events/deleteEventRequest');
export const deleteEventSuccess = createAction('events/deleteEventSuccess');
export const deleteEventError = createAction('events/deleteEventError');

export const getEventsRequest = createAction('events/getEventsRequest');
export const getEventsSuccess = createAction('events/getEventsSuccess');
export const getEventsError = createAction('events/getEventsError');
