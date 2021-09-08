import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userOperations } from './redux/user';

import { PrivatRoute, PublicRoute } from './routes';
import { CalendarPage, LoginPage, RegistrationPage } from './screens';
const App = () => {
  const dispatch = useDispatch();
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
    </>
  );
};

export default App;
