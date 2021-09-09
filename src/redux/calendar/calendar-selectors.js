import { mapper } from '../../helpers/mapper';
import { createSelector } from '@reduxjs/toolkit';

export const getAllEvents = state => {
  return state.calendar.events;
};

export const mappedData = createSelector([getAllEvents], events => {
  return mapper([...events]);
});
