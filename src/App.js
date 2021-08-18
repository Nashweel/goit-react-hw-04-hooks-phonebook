import React, { useState } from "react";
import shortid from "shortid";
import useLocalStorage from "./hooks/useLocalStorage";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactList";
import Filter from "./components/Filter";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const handleAddContact = (name, phone) => {
    const contact = {
      id: shortid.generate(),
      name,
      phone,
    };

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (contacts.find((contact) => contact.number === phone)) {
      alert(`Number ${phone} is already in contacts`);
      return;
    }

    if ((!name || name.trim() === "") && (!phone || phone.trim() === "")) {
      alert('Fill in the fields "Name" and "Number"');
      return;
    }

    if (!name || name.trim() === "") {
      alert('Field "Name" is empty');
      return;
    }

    if (!phone || phone.trim() === "") {
      alert('Field "Number" is empty');
      return;
    }
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };
  const handleRemoveContact = (id) => {
    setContacts(() => contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (evt) => setFilter(evt.target.value);

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      {contacts.length === 0 ? (
        <p>There are no contacts</p>
      ) : (
        <ContactsList
          contacts={getVisibleContacts()}
          onRemove={handleRemoveContact}
        />
      )}
    </>
  );
}
