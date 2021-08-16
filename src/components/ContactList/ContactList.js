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
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  id: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
};

export default ContactsList;
