import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Logo from '../Logo';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import './AppBar.css';
import '../Navigation/Navigation.css';

export default function AppBar() {
  const isAuth = !!useSelector(authSelectors.getIsAuth);
  return (
    <header className="AppBar-wrapper">
      <CSSTransition in={true} appear={true} classNames="AppBar-logo" timeout={500} unmountOnExit>
        <Logo />
      </CSSTransition>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
