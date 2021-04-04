import React from "react";
import {LoginWithAuth} from "./components/Login";
import {Register} from "./components/Register";
import {Map}  from "./components/Map";
import {Profile} from "./components/Profile";
import PropTypes from "prop-types";
import "./stylesheets/main.css";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.jsx";




class App extends React.Component {

  render() {  
    return (
      <div className="wrapper">
        <Switch>
          <Route path="/login" component={LoginWithAuth} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/map" component={Map} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
        
      </div>
    )
  };
  
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
