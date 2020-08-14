import React from 'react';
import '../styles/DashboardPage.css';
import TaskPanel from './TaskPanel';
import WidgetPanel from './WidgetPanel';

const Panels = ({ user }) => {
  return (
    <div className='panel-wrapper'>
      <TaskPanel />
      <WidgetPanel user={user} />
    </div>
  );
};

export default Panels;