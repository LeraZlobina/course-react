import React from "react";
import {LoginWithAuth} from "./components/Login";
import {RegisterWithAuth} from "./components/Register";
import {Map}  from "./components/Map";
import {Profile} from "./components/Profile";
import "./stylesheets/main.css";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.jsx";

export default () => {

  return (
    
    <Switch>
      <PrivateRoute path="/map" component={Map} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/login" component={LoginWithAuth} />
      <Route path="/register" component={RegisterWithAuth} />
    </Switch>
      
    
  )
}



