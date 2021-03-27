import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import '../Notification/Notification.css';
import { authOperations, authSelectors } from '../../redux/auth';
import Loader from '../Loader';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isAuthLoading = useSelector(authSelectors.getAuthLoading);
  const error = useSelector(authSelectors.getAuthError);

  const onLogin = useCallback(
    (email, password) => dispatch(authOperations.login(email, password)),
    [dispatch],
  );
  const onClearError = useCallback(() => dispatch(authOperations.onClearErrorMessage()), [
    dispatch,
  ]);

  useEffect(() => {
    if (error) {
      showNotification(error);
      onClearError();
    }
  }, [error, onClearError]);

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (!email) return showNotification('Please enter email');
      if (!password) return showNotification('Please enter password');

      onLogin({ email, password });
      setEmail('');
      setPassword('');
    },
    [email, password, onLogin],
  );

  const showNotification = errorMessage => {
    setErrorMessage(errorMessage);
  };

  return (
    <>
      <div className="Notification-wrapper">
        <CSSTransition in={!!errorMessage} classNames="Notification" timeout={250} unmountOnExit>
          <Notification onView={showNotification} message={errorMessage} />
        </CSSTransition>
      </div>

      {isAuthLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Password
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></input>
          </label>
          <br />
          <button
            className="btn-phonebook"
            type="submit"
            disabled={(!email && !password) || !!errorMessage}
          >
            Login
          </button>
        </form>
      )}
    </>
  );
}
