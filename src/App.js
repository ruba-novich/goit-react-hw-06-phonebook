import React from 'react';

import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import SearchFilter from './Components/SearchFilter';
import ContactList from './Components/ContactList';

import 'modern-normalize/modern-normalize.css';
import './styles.css';

function App() {
  return (
    <Container>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <SearchFilter />
        <ContactList />
      </Section>
    </Container>
  );
}

export default App;
