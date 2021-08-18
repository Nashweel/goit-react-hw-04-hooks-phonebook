import React from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li className={s.ContactItem}>
      {name}: {phone} <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem
          name={name}
          number={phone}
          key={id}
          onRemove={() => onRemove(id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
