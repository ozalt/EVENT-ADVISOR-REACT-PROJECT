import React, { useState } from 'react';
import './accountform.css';
import { Link } from 'react-router-dom';
import { InputField } from '../../components';

const AccountForm = ({ formTitle, btnText, footerText, spanText, btnLink, spanLink, mod }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    async function fieldValue(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
                phoneNumber
            }),
        })

        const data = await response.json()
        console.log(data)

        // if (data.status === 'ok') {
        //     history.push('/login')
        // }
    }

    return (
        <div>
            <div className="mod-field">
                <div className="mod-heading">
                    <p>Welcome to Well Eve</p>
                    <h3>{formTitle}</h3>
                </div>
                <div className="mod-form">
                    <form onSubmit={fieldValue}>
                        {mod === 'login' && (
                            <>
                                <InputField labelText="username or email" placeHolderText="example: john wick" value={username} onChange={handleUsernameChange} />
                                <InputField labelText="Password" placeHolderText="********" value={password} onChange={handlePasswordChange} />
                            </>
                        )}
                        {mod === 'signup' && (
                            <>
                                <InputField labelText="username" placeHolderText="example: john wick" value={username} onChange={handleUsernameChange} />
                                <InputField labelText="Email" placeHolderText="someone@gmail.com" value={email} onChange={handleEmailChange} />
                                <InputField labelText="Phone Number" placeHolderText="03**-*******" value={phoneNumber} onChange={handlePhoneNumberChange} />
                                <InputField labelText="Password" placeHolderText="********" value={password} onChange={handlePasswordChange} />
                            </>
                        )}
                        {/* <Link to={btnLink}> */}
                        <button type="submit">{btnText}</button>
                        {/* </Link> */}
                    </form>
                </div>
                <p>Or</p>
                <h5>
                    {footerText} <Link to={spanLink}><span>{spanText}</span></Link>
                </h5>
            </div>
        </div>
    );
};

export default AccountForm;





