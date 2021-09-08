import axios from 'axios';

import './api-settings';

const getEvents = async () => {
  const { data } = await axios.get('/api/v1/events');
  return data;
};

const addEvent = async event => {
  const { data } = await axios.post('/api/v1/events', event);
  return data;
};

const deleteEventById = async id => {
  await axios.delete(`/api/v1/events/${id}`);
};

const api = { getEvents, addEvent, deleteEventById };

export default api;
