// import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import { sessionSelectors } from '../redux/session';

export default function PrivatRoute({ component: Component, redirectTo, ...routeProps }) {
  // const isAuth = useSelector(sessionSelectors.getIsAuth);
  const isAuth = false;
  return (
    <Route
      {...routeProps}
      render={props => (isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  );
}
