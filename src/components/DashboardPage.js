import React from 'react';
import '../styles/DashboardPage.css';
import Topbar from './Topbar';
import Panels from './Panels';

const DashboardPage = ({ user }) => {
  return (
    <div className='content-wrapper'>
      <Topbar />
      <Panels user={user} />
    </div>
  );
};

export default DashboardPage;