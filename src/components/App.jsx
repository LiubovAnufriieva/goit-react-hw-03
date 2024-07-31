import { useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import initialContacts from "../contacts.json";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((allContacts) => {
      return [...allContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((allContacts) => {
      return allContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList value={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
