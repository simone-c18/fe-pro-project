import React, { useState } from 'react'
import './Signup.css'
import user_icon from '../components/assets/person.png'
import password_icon from '../components/assets/password.png'
import email_icon from '../components/assets/email.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
  
    return (
      <div className='container'>
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
  
        {/*inputs div 1 for name*/}
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
              <img src={user_icon} alt=""/>
              <input type="text" placeholder='Username'/>
          </div>}
        </div>
  
        {/*inputs div 2 for email*/}
        <div className="inputs">
          <div className="input">
              <img src={email_icon} alt=""/>
              <input type="email" placeholder='E-mail'/>
          </div>
        </div>
  
        {/*inputs div 3 for password*/}
        <div className="inputs">
          <div className="input">
              <img src={password_icon} alt=""/>
              <input type="password" placeholder='Password'/>
          </div>
        </div>
  
        {action==="Sign Up"?<div></div>:<div className="forgot-password"><span>Forgot Password?</span></div>}
        {/*div for lost password*/}
       
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Join</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    )
  }
  

export default LoginSignup