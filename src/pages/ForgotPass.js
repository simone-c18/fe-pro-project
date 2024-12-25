import React from 'react'
import './ForgotPass.css'
import NavigateButton from '../components/Button'


const ForgotPass = () => {
    return <div>

    <div className="title">
        <h3>Forgot password?</h3>
    </div>
    
    <div className="subtitle">
        <p>No worries, we'll send you reset intructions.</p>
    </div>

    <div className="email-input">
    <input className="email-input"
            type="email"
            placeholder="Email"
        />
    </div>

    <div>
        <button className="submit-button"> Submit </button>
    </div>
    
    <div className="back-to-login-button">
        <NavigateButton to="/login" text="Back to login" className="back-to-login-button"/>
    </div>

    </div>;
};

export default ForgotPass;
