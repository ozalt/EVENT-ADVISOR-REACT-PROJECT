import React from 'react';
import './inputfield.css';

const InputField = ({ labelText, placeHolderText, value, onChange }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="username">Enter your {labelText}</label>
                <input
                    type="text"
                    name=""
                    id="username"
                    placeholder={placeHolderText}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default InputField;
