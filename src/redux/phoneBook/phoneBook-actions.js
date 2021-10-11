import { createAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const delContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

const contactsActions = { addContact, delContact, changeFilter };

export default contactsActions;
