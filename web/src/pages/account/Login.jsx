import React from 'react';
import './account.css';
import { Link } from "react-router-dom";
import bgImg1 from '../../assets/Saly-2.png';
import bgImg2 from '../../assets/Saly-3.png';
import { AccountForm } from '../../containers';

const Login = () => {
    return (
        <div className="signup">
            <div className="left-section">
                <Link to="/">
                    <h1>Well Eve</h1>
                </Link>
                <img src={bgImg1} alt="" />
            </div>
<<<<<<< Updated upstream
            <AccountForm formTitle='Login Up' btnText='Sign In' footerText='No Account?' spanText=' Sign Up' btnLink='/' spanLink='/signup' mod='login'/>
=======
            <div className="mod-field">
                <div className="mod-heading">
                    <p>Welcome to Well Eve</p>
                    <h3>Log In</h3>
                </div>
                <div className="mod-form">
                    <form onSubmit={handleLogin}>

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

                        <button type="submit" disabled={isloading}>Login</button>
                        {error && <div className='error'>{error}</div>}
                    </form >
                </div>
                <p>Or</p>
                <h5>
                    No Account. <Link to="/signup"><span>Sign Up</span></Link>
                </h5>
            </div>
>>>>>>> Stashed changes
            <div className="right-section">
                <img src={bgImg2} alt="" />
            </div>
        </div>
    )
}

export default Login
