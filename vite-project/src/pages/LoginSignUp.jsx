
import './LoginSignUp.css';
import React, { useState } from 'react';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const login = async () => {
    try {
      const response = await fetch('https://ecomm-website-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      }
      console.log('Login successful:', responseData);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const signup = async () => {
    try {
      const response = await fetch('https://ecomm-website-backend.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ username: formData.username, email: formData.email, password: formData.password }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      }
      console.log('Signup successful:', responseData);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login();
    } else {
      signup();
    }
  };

  return (
    <div className="ex">
      <div className="login-signup-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="login-signup-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={changeHandler}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              required
            />
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
