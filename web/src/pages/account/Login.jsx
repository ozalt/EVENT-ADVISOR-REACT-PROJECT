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
            <AccountForm formTitle='Login Up' btnText='Sign In' footerText='No Account?' spanText=' Sign Up' btnLink='/' spanLink='/signup' mod='login'/>
            <div className="right-section">
                <img src={bgImg2} alt="" />
            </div>
        </div>
    )
}

export default Login
