import React from "react";

export const Input = ({name, type, label, placeholder, value, change}) => {
    
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} placeholder={placeholder} value={value} onChange={e => {change(e.target.value)}} />
        </div>  
    );
};

