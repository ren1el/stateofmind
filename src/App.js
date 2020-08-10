import React, { useState, useEffect } from 'react';
import './styles/App.css';
import InitPage from './components/InitPage';
import HomePage from './components/DashboardPage';
import { Switch, Route, useHistory } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    const getUser = localStorage.getItem('stateofmind-user-name');
    if(getUser) {
      setUser(getUser);
      history.push('/home');
      // localStorage.removeItem('stateofmind-user-name');
    }
  }, []); // eslint-disable-line

  return (
    <div className='wrapper'>
      <Switch>
        <Route path='/home'>
          <div className='page'>
            <HomePage user={user} />
          </div>
        </Route>
        <Route path='/'>
          <div className='dashboard-page'>
            <InitPage setUser={setUser} />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
