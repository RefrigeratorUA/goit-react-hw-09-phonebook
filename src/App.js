import { Suspense, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Section from './components/Section';
import AppBar from './components/AppBar';
import routes from './routes';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from './components/Loader';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map(route => {
            const { component: Component } = route;
            return route.privat ? (
              <PrivateRoute key={route.name} {...route}>
                <Component />
              </PrivateRoute>
            ) : (
              <PublicRoute key={route.name} {...route}>
                <Component />
              </PublicRoute>
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Section>
  );
}
