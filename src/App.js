import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userOperations, userSelectors } from './redux/user';
import { sessionSelectors } from './redux/session';
import { globalSelectors } from './redux/global';

import { PrivatRoute, PublicRoute } from './routes';
import { CalendarPage, LoginPage, RegistrationPage } from './screens';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './components';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(sessionSelectors.getError);
  const isLoading = useSelector(globalSelectors.isLoading);

  useEffect(() => {
    toast(error);
  }, [error]);

  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <PublicRoute restricted redirectTo="/" path="/register" component={RegistrationPage} />
        <PublicRoute restricted redirectTo="/" path="/login" component={LoginPage} />
        <PrivatRoute path="/" exact component={CalendarPage} redirectTo="/login" />
      </Switch>
      <ToastContainer />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
