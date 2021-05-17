import React from 'react';
import PropTypes from 'prop-types';

export const InputForProfile = ({
  name,
  type,
  value,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div
      data-testid="inputForProfile"
      className="input-wrapper input-wrapper--profile"
    >
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        name={name}
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

InputForProfile.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
