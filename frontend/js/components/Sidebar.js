import React from 'react';

export default class Sidebar extends React.Component {

  render() {
    return (
        <div className="sidebar">
          <div className="sidebar-item">
            <span>Dashboard</span>
            <hr/>
          </div>

          <div className="sidebar-item">
            <span>Employees</span>
            <hr/>
          </div>

          <div className="sidebar-item">
            <span>Payments</span>
            <hr/>
          </div>
        </div>);
  }
};