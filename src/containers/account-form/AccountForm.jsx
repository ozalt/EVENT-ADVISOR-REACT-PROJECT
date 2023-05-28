import React from 'react';
import './accountform.css';
import { Link } from 'react-router-dom';
import { InputField } from '../../components';

const AccountForm = ({ formTitle, btnText, footerText, spanText, btnLink, spanLink, mod }) => {
    return (
        <div>
            <div className="mod-field">
                <div className="mod-heading">
                    <p>Welcome to Well Eve</p>
                    <h3>{formTitle}</h3>
                </div>
                <div className="mod-form">
                    <form action="" method="post">
                        {mod === 'login' && (
                            <>
                                <InputField labelText="username or email" placeHolderText="example: john wick" />
                                <InputField labelText="Password" placeHolderText="********" />
                            </>
                        )}
                        {mod === 'signup' && (
                            <>
                                <InputField labelText="username" placeHolderText="example: john wick" />
                                <InputField labelText="Email" placeHolderText="someone@gmail.com" />
                                <InputField labelText="Phone Number" placeHolderText="03**-*******" />
                                <InputField labelText="Password" placeHolderText="********" />
                            </>
                        )}
                        <Link to={btnLink}>
                            <button type="submit">{btnText}</button>
                        </Link>
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
