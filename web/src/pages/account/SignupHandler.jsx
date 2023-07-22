import React, { useState } from 'react';
import './account.css';
import { Link, useNavigate } from "react-router-dom";
import bgImg1 from '../../assets/Saly-2.png';
import bgImg2 from '../../assets/Saly-3.png';
import VendorForm from './VendorForm'; // Import the VendorForm component
import UserForm from './UserForm'; // Import the UserForm component


const SignupHandler = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isVendor, setIsVendor] = useState(true); // Track the selected form type
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
            const response = await fetch('http://localhost:5000/api/vendor/signup', {
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

    const handleToggle = () => {
        setIsVendor(!isVendor);
    };

    return (
        <div className="signup">
            <div className="left-section">
                <Link to="/">
                    <h1>Well Eve</h1>
                </Link>
                <img src={bgImg1} alt="" />
            </div>
            <div className="mod-field">
                <div className="mod-heading">
                    <p>Welcome to Well Eve</p>
                    <h3>Sign Up</h3>
                </div>
                <div className="mod-form">
                    {isVendor ? ( // Render the VendorForm if isVendor is true, otherwise render the UserForm
                        <VendorForm
                            user={user}
                            email={email}
                            phone={phone}
                            password={password}
                            onUsernameChange={handleUsernameChange}
                            onEmailChange={handleEmailChange}
                            onPhoneNumberChange={handlePhoneNumberChange}
                            onPasswordChange={handlePasswordChange}
                            onSubmit={handleSignup}
                            error={error}
                        />
                    ) : (
                        <UserForm
                            user={user}
                            email={email}
                            password={password}
                            onUsernameChange={handleUsernameChange}
                            onEmailChange={handleEmailChange}
                            onPasswordChange={handlePasswordChange}
                            onSubmit={handleSignup}
                            error={error}
                        />
                    )}
                </div>
                <div className="radio-wrapper">
                    <input
                        type="radio"
                        name="select"
                        id="option-1"
                        checked={!isVendor}
                        onChange={handleToggle}
                    />
                    <input
                        type="radio"
                        name="select"
                        id="option-2"
                        checked={isVendor}
                        onChange={handleToggle}
                    />
                    <label htmlFor="option-1" className="option option-1">
                        <div className="dot"></div>
                        <span>User</span>
                    </label>
                    <label htmlFor="option-2" className="option option-2">
                        <div className="dot"></div>
                        <span>Vendor</span>
                    </label>
                </div>
                <p>Or</p>
                <h5>
                    Already have an account. <Link to="/login"><span>Sign In</span></Link>
                </h5>
            </div>
            <div className="right-section">
                <img src={bgImg2} alt="" />
            </div>
        </div>
    );
};

export default SignupHandler;
