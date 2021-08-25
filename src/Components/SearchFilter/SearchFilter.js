import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchFilter.module.css';

const SearchFilter = ({ value = '', onChangeFilter }) => (
  <label className={styles.lable}>
    Find contact by name
    <br />
    <input
      type="text"
      value={value}
      onChange={onChangeFilter}
      className={styles.filters}
    ></input>
  </label>
);

SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default SearchFilter;
