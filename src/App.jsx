import { useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container } from 'components/common/Container';
import { Title } from 'components/common/TitleStyled';
import initialContacts from './data/data.json';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts =>
      contacts.find(contact => contact.name === newContact.name)
        ? alert(`${newContact.name} is already in contacts`)
        : { contacts: [...contacts, newContact] }
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = useMemo(() => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContacts)
    );
  }, [contacts, filter]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
