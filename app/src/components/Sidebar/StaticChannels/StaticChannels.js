import React from "react";

import { staticChannels } from "../../../config/constants";

const StaticChannels = () => (
  <div className="static-channes">
    <ul>
      {staticChannels.map((channelName, index) => {
        return <li key={index}>{channelName}</li>;
      })}
    </ul>
  </div>
);

export default StaticChannels;
