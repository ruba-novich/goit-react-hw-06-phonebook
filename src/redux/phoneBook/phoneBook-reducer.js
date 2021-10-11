import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from '../phoneBook/phoneBook-actions';

const itemsReducer = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.delContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
