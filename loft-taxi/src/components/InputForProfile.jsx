import React from "react";
import PropTypes from "prop-types";


export const InputForProfile = ({name, type, label, placeholder, change}) => {
    
    return (
        <div data-testid="inputForProfile" className="input-wrapper input-wrapper--profile">
            <label className="label" htmlFor={name}>{label}</label>
            <input className="input" id={name} type={type} placeholder={placeholder} onChange={change} />
        </div>  
    );
};

InputForProfile.propTypes = {
    name: PropTypes.string, 
    type: PropTypes.string, 
    label: PropTypes.string, 
    placeholder: PropTypes.string
}