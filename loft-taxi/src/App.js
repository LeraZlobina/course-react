import React from "react";
import { LoginWithAuth } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Map } from "./components/Map";
import { Profile } from "./components/Profile";
import { HeaderWithAuth } from "./components/Header";
import { withAuth } from "./components/AuthContext";
import PropTypes from "prop-types";
import "./stylesheets/main.css";


class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page })
    } else {
      this.setState({ currentPage: "login" })
    }
    
  };

  render() {  
    return (
      <div className="wrapper">
        {(this.state.currentPage!=="login" && this.state.currentPage!=="signUp" ) && <HeaderWithAuth navigate={this.navigateTo} />}
        {this.state.currentPage === "login" && <LoginWithAuth navigate={this.navigateTo} />}
        {this.state.currentPage === "signUp" && <SignUp navigate={this.navigateTo} />}
        {(this.state.currentPage!=="login" && this.state.currentPage!=="signUp") && <Map />}
        {this.state.currentPage === "profile" && <Profile />}
      </div>
    )
  };
  
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default withAuth(App);
