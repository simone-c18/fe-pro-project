import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom';

function NavigateButton({to, text, className}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to); // Navigate to the specified route
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}

export default NavigateButton
