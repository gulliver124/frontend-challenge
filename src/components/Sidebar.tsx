import React from 'react';
import { Home, Database, User, Settings, LogOut, Calendar} from 'react-feather';
import './Sidebar.css'; // Create this CSS file for styling

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h1>TEST</h1>
      <nav>
        <ul>
          <li><Home /> Home</li>
          <li><Calendar /> Posts</li>
          <li><Database /> Albums</li>
          <li><User /> Users</li>
        </ul>
      </nav>
      <div className="sidebar-footer">
      <nav>
        <ul>
          <li><User /> USER NAME</li>
          <li><Settings /> Settings</li>
          <li><LogOut /> Log Out</li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Sidebar;
