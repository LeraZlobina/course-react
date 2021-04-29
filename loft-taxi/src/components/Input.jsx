import React from "react";
import PropTypes from "prop-types";

export const Input = ({name, type, label, placeholder, change}) => {
    
    return (
        <div data-testid="input" className="input-wrapper">
            <label className="label" htmlFor={name}>{label}</label>
            <input className="input" id={name} type={type} placeholder={placeholder} onChange={change} />
        </div>  
    );
};

Input.propTypes = {
    name: PropTypes.string, 
    type: PropTypes.string, 
    label: PropTypes.string, 
    placeholder: PropTypes.string
}