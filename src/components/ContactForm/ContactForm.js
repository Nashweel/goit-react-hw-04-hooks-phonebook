import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "phone":
        setPhone(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onAdd(name, phone);

    if ((!name && phone) || (name && !phone)) resetForm();
  };
  const resetForm = () => {
    setName("");
    setPhone("");
  };
  return (
    <form onSubmit={handleFormSubmit} className={s.ContactForm}>
      <input
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder="Enter name"
        value={name}
        onChange={handleChange}
        className={s.FormInput}
      />
      <input
        id={numberInputId}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChange}
        className={s.FormInput}
      />
      <button type="submit" className={s.FormButton}>
        Add Contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
