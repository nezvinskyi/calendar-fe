import * as actions from './global-actions';

export const openModalAddEvent = () => async dispatch => {
  dispatch(actions.openModalAddEvent());
};

export const closeModalAddEvent = () => async dispatch => {
  dispatch(actions.closeModalAddEvent());
};
