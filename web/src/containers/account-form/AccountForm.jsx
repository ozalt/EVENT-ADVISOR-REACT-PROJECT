import React, { useState } from 'react';
import './accountform.css';
import { Link, useNavigate } from 'react-router-dom';
import { InputField } from '../../components';

const AccountForm = ({ formTitle, btnText, footerText, spanText, spanLink, mod }) => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleUsernameChange = (event) => {
        setUser(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const userData = { user, email, phone, password };

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            setUser('');
            setPassword('');
            setEmail('');
            setPhone('');
            setError('');
            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    };



    return (
        <div>
            <div className="mod-field">
                <div className="mod-heading">
                    <p>Welcome to Well Eve</p>
                    <h3>{formTitle}</h3>
                </div>
                <div className="mod-form">
                    {mod === 'login' && (
                        <>
                            <form>

                                {/* username */}
                                <InputField labelText="username" placeHolderText="example: john wick" inputType={"text"} value={user} onChange={handleUsernameChange} />
                                {/* password */}
                                <InputField labelText="Password" inputType={"password"} placeHolderText="********" value={password} onChange={handlePasswordChange} />
                                <button type="submit">{btnText}</button>
                                {error && <div className='error'>{error}</div>}
                            </form>
                        </>
                    )}
                    {mod === 'signup' && (
                        <>
                            <form onSubmit={handleSignup}>

                                {/* username */}
                                <InputField labelText="username" placeHolderText="example: john wick" value={user} inputType={"text"} onChange={handleUsernameChange} />
                                {/* email */}
                                <InputField labelText="Email" placeHolderText="someone@gmail.com" inputType={"email"} value={email} onChange={handleEmailChange} />
                                {/* phone number */}
                                <InputField labelText="Phone Number" placeHolderText="03**-*******" inputType={"number"} value={phone} onChange={handlePhoneNumberChange} />
                                {/* password */}
                                <InputField labelText="Password" placeHolderText="********" value={password} inputType={"password"} onChange={handlePasswordChange} />
                                <button type="submit">{btnText}</button>
                                {error && <div className='error'>{error}</div>}
                            </form>
                        </>
                    )}
                    {/* <Link to={btnLink}> */}
                    {/* </Link> */}
                </div>
                <p>Or</p>
                <h5>
                    {footerText} <Link to={spanLink}><span>{spanText}</span></Link>
                </h5>
            </div>

        </div >
    );
};

export default AccountForm;





