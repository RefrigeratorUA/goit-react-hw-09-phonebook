import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';

export default function Navigation() {
  const isAuth = useSelector(authSelectors.getIsAuth);
  return (
    <nav className="NavClass">
      {routes.map(route => {
        const { name, path, showInNav, privat } = route;
        return (
          showInNav &&
          (!privat || (isAuth && privat)) && (
            <NavLink
              key={name}
              exact
              to={path}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              {name}
            </NavLink>
          )
        );
      })}
    </nav>
  );
}
