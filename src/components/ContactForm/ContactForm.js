import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

const INITIAL_STATE = {
  name: "",
  phone: "",
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFromSubmit = (e) => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidateFrom = this.validateForm();

    if (!isValidateFrom) return;

    onAdd({ id: shortid(), name, phone });
    this.resetForm();
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert("Some filed is empty");
      return false;
    }

    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INITIAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFromSubmit} className={s.ContactForm}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
          className={s.FormInput}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeForm}
          className={s.FormInput}
        />
        <button type="submit" className={s.FormButton}>
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onCheckUnique: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
