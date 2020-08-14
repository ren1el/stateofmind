import React, { useState, useEffect } from 'react';
import './styles/App.css';
import InitPage from './components/InitPage';
import DashboardPage from './components/DashboardPage';
import TimeWidget from './components/widgets/TimeWidget';
import BreathingWidget from './components/widgets/BreathingWidget';
import JournalWidget from './components/widgets/JournalWidget';
import { Switch, Route, useHistory } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState('');
  const history = useHistory();

  useEffect(() => {
    const getUser = localStorage.getItem('stateofmind-user-name');
    if(getUser) {
      setUser(getUser);
      history.push('/dashboard');
      // localStorage.removeItem('stateofmind-user-name');
    }
  }, [history]);

  return (
    <div className='wrapper'>
      <Switch>
        <Route path='/dashboard'>
          <DashboardPage user={user} />
        </Route>
        <Route path='/timeWidget'>
          <TimeWidget />
        </Route>
        <Route path='/breathingWidget'>
          <BreathingWidget />
        </Route>
        <Route>
          <JournalWidget path='/journalWidget' />
        </Route>
        <Route path='/'>
          <div className='init-page'>
            <InitPage setUser={setUser} />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
