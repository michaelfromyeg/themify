import React from 'react';
import "./Sidebar.css"

// Components
import StaticChannels from "./StaticChannels/StaticChannels"
import DirectMessages from "./DirectMessages/DirectMessages"
import Channels from "./Channels/Channels"

const Sidebar = () => (
  <div className="sidebar">
    
    <div style={{ height: 40 }}>
      <h1 className="workspace-name">Themify</h1>
      <p className="person-name">Your Name</p>
    </div>

    <hr />
    <StaticChannels />
    <hr />
    <DirectMessages />
    <hr />
    <Channels />
  </div>
);

export default Sidebar;