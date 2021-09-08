import axios from 'axios';
import '../../service/api-settings';
import * as actions from './user-actions';
import api from '../../service/auth-api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = credentials => async dispatch => {
  dispatch(actions.registerRequest());

  try {
    const { name, email, password } = credentials;
    const { data } = await api.registerUser(name, email, password);

    token.set(data.token);
    localStorage.setItem('userInfo', JSON.stringify(data));

    dispatch(actions.registerSuccess(data));
  } catch (error) {
    dispatch(actions.registerError(error.response?.data.message || error.message));
  }
};

export const login = credentials => async dispatch => {
  dispatch(actions.loginRequest());

  try {
    const { email, password } = credentials;

    const { data } = await api.loginUser(email, password);

    token.set(data.token);
    localStorage.setItem('userInfo', JSON.stringify(data));

    dispatch(actions.loginSuccess(data));
  } catch (error) {
    dispatch(actions.loginError(error.response?.data.message || error.message));
  }
};

export const logout = () => async dispatch => {
  dispatch(actions.logoutRequest());

  try {
    await api.logout();
    token.unset();
    localStorage.removeItem('userInfo');
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error.response?.data.message || error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    user: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(actions.getCurrentUserRequest());

  try {
    const { data } = await api.getCurrentUser();
    dispatch(actions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error.response?.data.message || error.message));
  }
};
