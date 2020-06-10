import React from 'react';
import square from "./Logos/square.png";
import "./Icons.css"

// Components
import Logo from "./Logo/Logo"

const Icons = () => (
  <div className="icons">
    <Logo source={square} />
    <Logo source={square} />
    <Logo source={square} />
    <Logo source={square} />
    <Logo source={square} />
  </div>
);

export default Icons;