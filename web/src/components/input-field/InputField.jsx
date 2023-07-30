import React from 'react';
import './inputfield.css';

const InputField = ({ labelText, placeHolderText, value, onChange, inputType }) => {
    return (
        <div className='input-field'>
            <div className="form-group">
                <label htmlFor="username">Enter your {labelText}</label>
                <input
                    type={inputType}
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
