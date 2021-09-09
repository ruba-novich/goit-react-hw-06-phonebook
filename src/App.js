import { useState, useEffect } from 'react';

import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import SearchFilter from './Components/SearchFilter';
import ContactList from './Components/ContactList';

import 'modern-normalize/modern-normalize.css';
import './styles.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = contact => {
    contacts.some(({ name }) => name === contact.name)
      ? alert(`${contact.name} is alredy in contacts`)
      : setContacts(state => [contact, ...state]);
  };

  const getVisibleContact = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()),
    );

  const onDeleteContact = idContactDel => {
    setContacts(state => contacts.filter(({ id }) => id !== idContactDel));
  };

  const changeFilter = e => setFilterValue(e.currentTarget.value);

  return (
    <Container>
      <Section title="PhoneBook">
        <ContactForm onSubmitForm={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <SearchFilter filterValue={filterValue} onChangeFilter={changeFilter} />
        <ContactList
          contacts={getVisibleContact()}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </Container>
  );
}

export default App;
