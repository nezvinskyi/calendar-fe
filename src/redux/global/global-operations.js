import * as actions from './global-actions';

export const openModalAddTransaction = () => async dispatch => {
  dispatch(actions.openModalAddEvent());
};

export const closeModalAddTransaction = () => async dispatch => {
  dispatch(actions.closeModalAddEvent());
};
