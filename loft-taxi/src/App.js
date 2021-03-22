import React from "react";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Map } from "./components/Map";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";

class App extends React.Component {

  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page })
  };

  render() {  
    return <>
      {(this.state.currentPage!=="login" && this.state.currentPage!=="signUp" ) && <Header navigate={this.navigateTo} />}
      <div>
        {this.state.currentPage === "login" && <Login navigate={this.navigateTo} />}
        {this.state.currentPage === "signUp" && <SignUp navigate={this.navigateTo} />}
        {this.state.currentPage === "map" && <Map />}
        {this.state.currentPage === "profile" && <Profile />}
      </div>
    </>;
  };
  
}

export default App;
