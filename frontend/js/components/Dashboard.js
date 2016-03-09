import React from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

export default class Dashboard extends React.Component {

  render() {
    return (
        <div className="dashboard">
          <Sidebar/>
          <DashboardContent/>
        </div>);
  }
};