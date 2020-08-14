import React from 'react';
import '../styles/DashboardPage.css';
import DashButton from './DashButton';

const WidgetPanel = ({ user }) => {
  const getCurrentTimeStage = () => {
    const currentHour = new Date().getHours();
    if(currentHour < 12) return 'morning';
    else if(12 <= currentHour && currentHour < 17) return 'afternoon';
    else if(17 <= currentHour && currentHour < 24) return 'evening';
    else return 'day';
  };

  return (
    <div className='panel right'>
      <h1 className='greeting'>Good {getCurrentTimeStage()}, {user}!</h1>
      <div className='button-row dev-border'>
        <DashButton text='Check how much time you’ve spent browsing' linkTo={'/timeWidget'} />
        <DashButton text='Feeling stessed? Do some breathing exercises' linkTo={'/breathingWidget'} />
        <DashButton text='Relieve tension by writing' linkTo={'/journalWidget'} />
      </div>
      <div className='button-row dev-border'>
        <DashButton text='Wanna hear a joke?' />
        <DashButton text='Have a look at your long term goals' />
        <DashButton text='Play some comforting music' />
      </div>
    </div>
  );
};

export default WidgetPanel;