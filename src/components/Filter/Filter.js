import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="Enter name for search"
    ></input>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
