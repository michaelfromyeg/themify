import React from "react";
import "./Main.css"

// Components
import Chat from "./Chat/Chat";
import ChannelDescription from "./ChannelDescription/ChannelDescription"

const Main = () => (
  <div className="main">
    <ChannelDescription />
    <hr />
    <Chat />
  </div>
);

export default Main;
