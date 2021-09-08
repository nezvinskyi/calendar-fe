import { Switch } from 'react-router-dom';

import { PrivatRoute, PublicRoute } from './routes';
import { CalendarPage, LoginPage, RegistrationPage } from './screens';
const App = () => {
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
