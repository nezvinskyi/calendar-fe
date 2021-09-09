import { mapper } from '../../helpers/mapper';
import { createSelector } from '@reduxjs/toolkit';

export const getAllEvents = state => {
  return state.calendar.events;
};

export const mappedData = createSelector([getAllEvents], events => {
  return mapper([...events]);
});

export const exportData = createSelector([mappedData], events => {
  return [...events].map(ev => ({ start: ev.start, duration: ev.duration, title: ev.title }));
});
