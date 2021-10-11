import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phoneBook/selectors';
import { v4 as uuidv4 } from 'uuid';
import contactsActions from '../../redux/phoneBook/phoneBook-actions';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      return alert(`Введите, пожалуйста, имя контакта.`);
    }

    if (number === '') {
      return alert(`Введите, пожалуйста, номер телефона контакта.`);
    }

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      reset();
      return alert(`${name} is already in contacts.`);
    }

    dispatch(contactsActions.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={nameInputId} className={styles.label}>
        Name
        <br />
        <input
          type="text"
          className={styles.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          id={nameInputId}
          value={name}
        ></input>
      </label>
      <label htmlFor={numberInputId} className={styles.label}>
        Number
        <br />
        <input
          type="tel"
          className={styles.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          id={numberInputId}
          value={number}
        ></input>
      </label>
      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
