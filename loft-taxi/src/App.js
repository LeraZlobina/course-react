import React from "react";
import {LoginWithConnect} from "./components/Login";
import {RegisterWithConnect} from "./components/Register";
import Map  from "./components/Map";
import Profile from "./components/Profile";
import "./stylesheets/main.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.jsx";

export default () => {

  return (
    
    <Switch>
      <PrivateRoute path="/map" component={Map} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/login" component={LoginWithConnect} />
      <Route path="/register" component={RegisterWithConnect} />
      <Redirect to="/login" />
    </Switch>
      
    
  )
}



