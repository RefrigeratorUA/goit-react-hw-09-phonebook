import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const token = useSelector(authSelectors.getToken);

  return <Route {...routeProps}>{isAuth || token ? children : <Redirect to={redirectTo} />}</Route>;
}
