import React, { useState } from 'react';
import './account.css';
import { Link, useNavigate } from "react-router-dom";
import bgImg1 from '../../assets/Saly-2.png';
import bgImg2 from '../../assets/Saly-3.png';

const SignUp = () => {
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
            const response = await fetch('http://localhost:5000/api/signup', {
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
                    <form onSubmit={handleSignup}>

                        {/* username */}
                        <div className="form-group">

                            <label htmlFor="username">Enter your Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="john wick"
                                value={user}
                                onChange={handleUsernameChange}
                            />
                        </div>

                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Enter your Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="someone@gmail.com"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        {/* phone number */}
                        <div className="form-group">

                            <label htmlFor="phone">Enter your Phone Number</label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="03**-*******"
                                value={phone}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>

                        {/* password */}
                        <div className="form-group">

                            <label htmlFor="password">Enter your Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="********"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <button type="submit">Create</button>
                        {error && <div className='error'>{error}</div>}
                    </form >
                </div>
                <p>Or</p>
                <h5>
                    Already have an account. <Link to="/login"><span>Sign In</span></Link>
                </h5>
            </div>
            <div className="right-section">
                <img src={bgImg2} alt="" />
            </div>
        </div >
    )
}

export default SignUp
