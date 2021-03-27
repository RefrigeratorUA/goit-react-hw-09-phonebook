import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification';
import '../Notification/Notification.css';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const items = useSelector(contactsSelectors.getAllContacts);

  const onAddContact = useCallback(
    (name, number) => dispatch(contactsOperations.addContact(name, number)),
    [dispatch],
  );

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (!name) return showNotification('Please enter contact name');
      if (!number) return showNotification('Please enter contact number');
      if (items.some(item => item.name === name)) {
        setName('');
        setNumber('');
        return showNotification(`${name} is already in contacts`);
      }

      onAddContact(name, number);
      setName('');
      setNumber('');
    },
    [items, name, number, onAddContact],
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

      <form onSubmit={handleSubmit} className="form-addContact">
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
          Number
          <input
            className="input"
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          ></input>
        </label>
        <br />
        <button
          className="btn-phonebook"
          type="submit"
          disabled={(!name && !number) || errorMessage}
        >
          Add contact
        </button>
      </form>
    </>
  );
}
