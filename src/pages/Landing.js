import React from 'react'
import './Landing.css'
import NavigateButton from '../components/Button'


const Landing = () => {
  return (
    <div>
      <div className="title">
        <h1>FE<span class="logo-color">Pro</span></h1>
      </div>

      <div className="subtitle">
        <p>Your study tool to pass the UCF Foundation Exam!</p>
      </div>

      <div className="buttons">
        <NavigateButton to="/register" text="Get Started" className="btn-primary"/>
        <NavigateButton to="/login" text="I have an account" className="btn-primary"/>
      </div>

      <div className="made-by-sim">
        <p>Made by Simone Chrastek</p>
      </div>
    </div>
  )
}

export default Landing