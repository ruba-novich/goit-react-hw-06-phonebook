import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phoneBook/selectors';
import contactsActions from '../../redux/phoneBook/phoneBook-actions';
import styles from './SearchFilter.module.css';

const SearchFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));
  return (
    <label className={styles.lable}>
      Find contact by name
      <br />
      <input
        className={styles.filters}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default SearchFilter;
