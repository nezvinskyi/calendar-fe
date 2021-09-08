import api from '../../service/events-api';
import * as actions from './calendar-actions';

export const getEvents = () => async dispatch => {
  dispatch(actions.getEventsRequest());

  try {
    const {
      data: { result },
    } = await api.getEvents();
    dispatch(actions.getEventsSuccess(result));
  } catch (error) {
    dispatch(actions.getEventsSuccess(error.response?.data.message || error.message));
  }
};

export const addEvent = event => async dispatch => {
  dispatch(actions.addEventRequest());

  try {
    const { data } = await api.addEvent(event);

    dispatch(actions.addEventSuccess(data.result));
  } catch (error) {
    dispatch(actions.addEventError(error.response?.data.message || error.message));
  }
};

export const deleteEvent = id => async dispatch => {
  dispatch(actions.deleteEventRequest());

  try {
    await api.deleteEventById(id);
    dispatch(actions.deleteEventSuccess(id));
  } catch (error) {
    dispatch(actions.deleteEventError(error));
  }
};

export const setAddEventError = error => async dispatch => {
  dispatch(actions.addEventError(error));
};
