import React from 'react';

const UserForm = ({
  user,
  email,
  password,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  error
}) => {
  return (
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

      <button type="submit">Create</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default UserForm;
