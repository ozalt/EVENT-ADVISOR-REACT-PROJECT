// VendorForm.js
import React from 'react';

const VendorForm = ({
  user,
  email,
  phone,
  cnic, // Add cnic prop
  regNumber, // Add regNumber prop
  password,
  onUsernameChange,
  onEmailChange,
  onPhoneNumberChange,
  onCnicChange, // Add onCnicChange handler
  onRegNumberChange, // Add onRegNumberChange handler
  onPasswordChange,
  onSubmit,
  error,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        {/* username */}
        <div className="form-group">
          <label htmlFor="username">Enter your Username</label>
          <input
            type="text"
            id="username"
            placeholder="john wick"
            value={user}
            onChange={onUsernameChange}
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
            onChange={onEmailChange}
          />
        </div>

        {/* phone number */}
        <div className="form-group">
          <label htmlFor="phone">Enter your Phone Number</label>
          <input
            type="text" // Use type="text" for phone number
            id="phone"
            placeholder="03**-*"
            value={phone}
            onChange={onPhoneNumberChange}
          />
        </div>

        {/* CNIC */}
        <div className="form-group">
          <label htmlFor="cnic">Enter your (CNIC):</label>
          <input
            type="text" // Use type="text" for CNIC to allow hyphen "-"
            id="cnic"
            placeholder="33110-*******-*"
            value={cnic} // Use cnic prop value
            onChange={onCnicChange} // Use onCnicChange handler
          />
        </div>

        {/* Registeration No. */}
        <div className="form-group">
          <label htmlFor="regNumber">Enter Business Regist. Number:</label>
          <input
            type="text" // Use type="text" for Business Registration Number
            id="regNumber"
            placeholder="*****"
            value={regNumber} // Use regNumber prop value
            onChange={onRegNumberChange} // Use onRegNumberChange handler
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
            onChange={onPasswordChange}
          />
        </div>
      </form>
      <button className="form-btn" type="submit">
        Create
      </button>
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default VendorForm;
