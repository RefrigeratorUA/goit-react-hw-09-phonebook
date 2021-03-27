import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  const isAuth = useSelector(authSelectors.getIsAuth);
  return (
    <Route {...routeProps}>
      {isAuth && routeProps.restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
