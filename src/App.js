import React, { Component } from 'react';

import Container from './Components/Container';
import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import SearchFilter from './Components/SearchFilter';
import ContactList from './Components/ContactList';

import 'modern-normalize/modern-normalize.css';
import './styles.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
