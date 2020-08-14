import React from 'react';
import '../../styles/DashboardPage.css';
import Topbar from '../Topbar';
import BackButton from '../BackButton';

const JournalWidget = () => {
  return (
    <div className='content-wrapper'>
      <Topbar />
      <BackButton />
      JournalWidget
    </div>
  );
};

export default JournalWidget;