import React from 'react';
import '../styles/DashButton.css';
import { useHistory } from 'react-router-dom';

const DashButton = ({ text, linkTo }) => {
  const history = useHistory();

  const onClick = (event) => {
    event.preventDefault();
    history.push(linkTo);
  };

  return (
    <button className='dash-btn' onClick={onClick}>
      {text}
    </button>
  );
};

export default DashButton;