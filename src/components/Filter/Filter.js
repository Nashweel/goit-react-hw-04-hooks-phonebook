import React from "react";

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="name"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for search"
    ></input>
  );
};

export default Filter;
