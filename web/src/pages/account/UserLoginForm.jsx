// UserLoginForm.js
import React, { useState } from 'react';

const UserLoginForm = ({ onSubmit, isloading, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Enter your Username</label>
        <input
          type="text"
          id="username"
          placeholder="johnwick12"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>

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

      <button type="submit" className="form-btn" disabled={isloading}>
        Login
      </button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default UserLoginForm;
