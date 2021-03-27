import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts';

export default function Filter() {
  const dispatch = useDispatch();

  const onFilterChange = useCallback(event => dispatch(filterContacts(event.target.value)), [
    dispatch,
  ]);

  return (
    <div className="filter">
      <p>Find contacts by name</p>
      <input className="input" type="text" onChange={onFilterChange}></input>
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
