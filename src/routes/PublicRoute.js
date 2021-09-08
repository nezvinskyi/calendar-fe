// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { sessionSelectors } from '../redux/session';

export default function PublicRoute({ component: Component, redirectTo, ...routeProps }) {
  const isAuth = false;
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth && routeProps.restricted ? <Redirect to={redirectTo} /> : <Component {...props} />
      }
    />
  );
}
