import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';



function App() {
  return (
    <>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/rooms/" component = {Rooms} />
      <Route exact path = "/rooms/:slug" component = {SingleRooms} />
     
    </>
  );
}

export default App;
