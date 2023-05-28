import React from 'react';
import './inputfield.css';

const InputField = ({labelText, placeHolderText}) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="username">Enter your {labelText}</label>
                <input type="text" name="" id="username" placeholder={placeHolderText} />
            </div>
        </div>
    )
}

export default InputField
