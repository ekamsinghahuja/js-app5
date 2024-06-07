import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="ex">
    <div className="login-signup-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form className="login-signup-form">
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="form-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="toggle-form-text">
        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}{' '}
        <span onClick={toggleForm} className="toggle-form-link">
          {isLogin ? 'Sign Up' : 'Login'}
        </span>
      </p>
    </div>
    </div>
  );
};

export default LoginSignUp;
