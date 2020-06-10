import React from 'react';
import * as firebase from 'firebase';
import { config } from "../../config/constants";
import "./App.css"

// Components
import Icons from "../Icons/Icons";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar"

firebase.initializeApp(config);

const App = () => (
  <div className="app">
    <Icons />
    <Sidebar />
    <Main />
  </div>
);

export default App;