import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import '../Notification/Notification.css';
import { authOperations, authSelectors } from '../../redux/auth';
import Loader from '../Loader';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isAuthLoading = useSelector(authSelectors.getAuthLoading);
  const error = useSelector(authSelectors.getAuthError);

  const onRegister = useCallback(
    (name, email, password) => dispatch(authOperations.register(name, email, password)),
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
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = event => {
    event.preventDefault();

    if (!name) return showNotification('Please enter user name');
    if (!email) return showNotification('Please enter email');
    if (!password) return showNotification('Please enter password');

    onRegister({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

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
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            ></input>
          </label>
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
            disabled={(!name && !email && !password) || !!errorMessage}
          >
            Register
          </button>
        </form>
      )}
    </>
  );
}
