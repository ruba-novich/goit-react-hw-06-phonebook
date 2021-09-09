import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

function ContactForm({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const contact = { name, number, id };

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

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
    setId(uuidv4());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitForm(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor={nameInputId} className={styles.label}>
        {' '}
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
        {' '}
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

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
