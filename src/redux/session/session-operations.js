import * as actions from './session-actions';

export const setError = error => async dispatch => {
  dispatch(actions.setError(error));
};

export const resetError = () => async dispatch => {
  dispatch(actions.resetError());
};
