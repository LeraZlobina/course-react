import React from "react";
import { LoginWithAuth } from "./components/Login";
import { Register} from "./components/Register";
import { Map } from "./components/Map";
import { Profile } from "./components/Profile";
import { HeaderWithAuth } from "./components/Header";
import { withAuth } from "./components/AuthContext";
import PropTypes from "prop-types";
import "./stylesheets/main.css";


class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn || page ==="register") {
      this.setState({ currentPage: page })
    } else {
      this.setState({ currentPage: "login" })
    }
    
  };

  render() {  
    return (
      <div className="wrapper">
        {(this.state.currentPage!=="login" && this.state.currentPage!=="register" ) && <HeaderWithAuth navigate={this.navigateTo} />}
        {this.state.currentPage === "login" && <LoginWithAuth navigate={this.navigateTo}/>}
        {this.state.currentPage === "register" && <Register navigate={this.navigateTo} />}
        {(this.state.currentPage!=="login" && this.state.currentPage!=="register") && <Map />}
        {this.state.currentPage === "profile" && <Profile />}
      </div>
    )
  };
  
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default withAuth(App);
