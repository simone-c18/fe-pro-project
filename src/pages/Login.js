import React, { useState } from 'react';
import './LoginSignup.css';
import email_icon from '../components/assets/email.png';
import password_icon from '../components/assets/password.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import NavigateButton from '../components/Button'


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", userCredential.user);
      navigate("/dashboard"); // Navigate to the dashboard or home page after login
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="container">

        <div className="corner button">
        <NavigateButton to="/register" text="Sign in" className="corner-button"/>


        </div>

      <div className="header">
        <div className="text">Log in</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="email" />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="password" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <NavigateButton to="/forgot-password" text="Forgot Password?" className="forgot-password"/>
      </div>

      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
