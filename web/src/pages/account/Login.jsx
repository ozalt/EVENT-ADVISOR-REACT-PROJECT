
import React, { useState } from 'react';
import './account.css';
import { Link } from 'react-router-dom';
import { useLogin } from './UseLogin';
import UserLoginForm from './UserLoginForm';
import VendorLoginForm from './VendorLoginForm';
import backgroundImage from '../../assets/Login.jpg';
const Login = () => {
  const [isVendorLogin, setIsVendorLogin] = useState(false);
  const { login, error, isloading } = useLogin();

  const handleToggleLogin = () => {
    setIsVendorLogin((prevState) => !prevState);
  };

  return (
    <div className="signup"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '1rem'
      }}>
      
      <div className="mod-field">
        <div className="mod-heading">
          <p>Welcome to Well Eve</p>
          <h3>Login as {isVendorLogin ? 'Vendor' : 'User'}</h3>
        </div>
        <div className="mod-form">
          {isVendorLogin ? (
            <VendorLoginForm
              onSubmit={(username, password) => login(username, password, true)}
              isloading={isloading}
              error={error}
            />
          ) : (
            <UserLoginForm
              onSubmit={(username, password) => login(username, password, false)}
              isloading={isloading}
              error={error}
            />
          )}
        </div>
        <div className="radio-wrapper">
          <input
            type="radio"
            name="select"
            id="option-1"
            checked={!isVendorLogin}
            onChange={handleToggleLogin}
          />
          <input
            type="radio"
            name="select"
            id="option-2"
            checked={isVendorLogin}
            onChange={handleToggleLogin}
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
          No Account. <Link to="/signup"><span>Sign Up</span></Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
