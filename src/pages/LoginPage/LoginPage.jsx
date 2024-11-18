import React from 'react';
import "./LoginPage.css";

const LoginPage = () => {
  return (
  <div className='login-container'>
    <div className='logo-image'>
      <img src="./login-logo.png" />
    </div>
    <div className='login-page'>
      <img src="./logo.svg"/>
      <button>Sign in with Google</button>
    </div>
  </div>
  );
};

export default LoginPage;
