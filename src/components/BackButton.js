import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  const onGoBack = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <div>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default BackButton;