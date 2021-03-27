import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import avatarDefault from '../../images/avatar-default.png';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '../Button';
import '../UserMenu/UserMenu.css';
import '../Button/Button.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  return (
    <div className="UserMenu">
      <img src={avatarDefault} width="32" height="32" alt="avatar" />
      <span>
        <b>Name:</b> {name}
      </span>
      <Button title={'Logout'} className="btn-phonebook btn-phonebook--logout" onClick={onLogout} />
    </div>
  );
}
