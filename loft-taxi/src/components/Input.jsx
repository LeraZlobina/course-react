import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ name, value, type, label, placeholder, onChange }) => {
  return (
    <div data-testid="input" className="input-wrapper">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        value={value}
        className="input"
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
