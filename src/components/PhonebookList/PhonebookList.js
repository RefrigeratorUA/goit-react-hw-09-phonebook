import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Filter from '../Filter';
import Notification from '../Notification';
import PhonebookListItem from '../PhonebookListItem';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import styles from './PhonebookList.module.css';
import Loader from '../Loader';

export default function PhonebookList() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  const onDelete = useCallback(id => dispatch(contactsOperations.deleteContact(id)), [dispatch]);
  const onClearError = useCallback(() => dispatch(contactsOperations.onClearErrorMessage()), [
    dispatch,
  ]);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="Notification-wrapper">
        <CSSTransition in={!!error} classNames="Notification" timeout={250} unmountOnExit>
          <Notification onView={onClearError} message={error} />
        </CSSTransition>
      </div>
      {isLoading && <Loader animation={'border'} />}
      {(contacts.length > 1 || filter) && <Filter />}

      <TransitionGroup component="ul" className="list">
        {contacts.map(({ name, id, number }) => (
          <CSSTransition key={id} timeout={250} classNames={styles}>
            <PhonebookListItem name={name} number={number} id={id} onDelete={onDelete} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  onDelete: PropTypes.func,
};
