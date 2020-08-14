import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const InitPage = ({ setUser }) => {
  const [name, setName] = useState('');
  const history = useHistory();

  const submitNameHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('stateofmind-user-name', name);
    setUser(name);
    history.push('/home');
    // localStorage.removeItem('stateofmind-user-name');
  };

  return (
    <>
      <h1>Hello. What’s your name?</h1>
      <Form inline onSubmit={submitNameHandler}>
        <Form.Control value={name} onChange={({ target}) => setName(target.value)} />
        <Button type='submit' variant='outline-dark'>Submit</Button>
      </Form>
    </>
  );
};

export default InitPage;