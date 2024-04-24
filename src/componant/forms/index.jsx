import React, { useState } from 'react';
import './style.css'
const LoginForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    
    if (
      !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/)
    ) {
      alert(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one symbol, and one number'
      );
      return;
    }

    
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="login-form-container"> 
      <form className="login-form"    onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
          />
          <button  className='' type="button" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'} 
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
