import React from 'react';
import contactsActions from '../../redux/phoneBook/phoneBook-actions';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phoneBook/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.delContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)} className={styles.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
