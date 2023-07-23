// SignupHandler.js
import React, { useState } from 'react';
import './account.css';
import { Link, useNavigate } from 'react-router-dom';
import VendorForm from './VendorForm'; // Import the VendorForm component
import UserForm from './UserForm'; // Import the UserForm component
import backgroundImage from '../../assets/Loginsignup_back.jpg';

const SignupHandler = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cnic, setCnic] = useState(''); // Add cnic state
  const [regNumber, setRegNumber] = useState(''); // Add regNumber state
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
    const input = event.target.value;
    // Remove any non-digit characters from the input (e.g., hyphens, spaces)
    const digitsOnly = input.replace(/[^\d]/g, '');
  
    // Format the digitsOnly string into the desired phone number format: ****-*******
    let formattedPhone = '';
    if (digitsOnly.length > 4) {
      formattedPhone += digitsOnly.substring(0, 4) + '-';
      if (digitsOnly.length > 8) {
        formattedPhone += digitsOnly.substring(4, 11);
      } else {
        formattedPhone += digitsOnly.substring(4);
      }
    } else {
      formattedPhone = digitsOnly;
    }
  
    setPhone(formattedPhone); // Update the phone state with the formatted value
  };

  const handleCnicChange = (event) => {
    const input = event.target.value;
    // Remove any non-digit characters from the input (e.g., hyphens, spaces)
    const digitsOnly = input.replace(/[^\d]/g, '');
  
    // Format the digitsOnly string into the desired CNIC format: xxxxx-xxxxxxx-x
    let formattedCnic = '';
    if (digitsOnly.length > 5) {
      formattedCnic += digitsOnly.substring(0, 5) + '-';
      if (digitsOnly.length > 12) {
        formattedCnic += digitsOnly.substring(5, 12) + '-';
        if (digitsOnly.length > 13) {
          formattedCnic += digitsOnly.substring(12);
        } else {
          formattedCnic += digitsOnly.substring(12);
        }
      } else {
        formattedCnic += digitsOnly.substring(5);
      }
    } else {
      formattedCnic = digitsOnly;
    }
  
    setCnic(formattedCnic); // Update the cnic state with the formatted value
  };
  const handleRegNumberChange = (event) => {
    setRegNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = { user, email, phone, cnic, regNumber, password }; // Include cnic and regNumber in the userData object

    try {
      const response = await fetch('http://localhost:5000/api/vendor/signup', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      setUser('');
      setPassword('');
      setEmail('');
      setPhone('');
      setCnic(''); // Reset cnic state
      setRegNumber(''); // Reset regNumber state
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
    <div
      className="signup"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '1rem'
      }}
    >
      <div className="mod-field">
        <div className="mod-heading">
          <p>Welcome to Well Eve</p>
          <h3>Sign Up</h3>
        </div>
        <div className="mod-form">
          {isVendor ? (
            <VendorForm
              user={user}
              email={email}
              phone={phone}
              cnic={cnic} // Pass the cnic state
              regNumber={regNumber} // Pass the regNumber state
              password={password}
              onUsernameChange={handleUsernameChange}
              onEmailChange={handleEmailChange}
              onPhoneNumberChange={handlePhoneNumberChange}
              onCnicChange={handleCnicChange} // Pass the onCnicChange handler
              onRegNumberChange={handleRegNumberChange} // Pass the onRegNumberChange handler
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
    </div>
  );
};

export default SignupHandler;
