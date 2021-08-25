import React, { Component } from 'react';

import 'modern-normalize/modern-normalize.css';
import './styles.css';
import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import SearchFilter from './Components/SearchFilter';
import ContactList from './Components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = contact => {
    this.state.contacts.some(({ name }) => name === contact.name)
      ? alert(`${contact.name} is alredy in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  onDeleteContact = idContactDel => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idContactDel),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <Section title="PhoneBook">
          <ContactForm onSubmitForm={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <SearchFilter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={this.getVisibleContact()}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
