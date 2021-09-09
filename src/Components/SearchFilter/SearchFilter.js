import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchFilter.module.css';

const SearchFilter = ({ filterValue = '', onChangeFilter }) => (
  <label className={styles.lable}>
    Find contact by name
    <br />
    <input
      type="text"
      value={filterValue}
      onChange={onChangeFilter}
      className={styles.filters}
    ></input>
  </label>
);

SearchFilter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default SearchFilter;
