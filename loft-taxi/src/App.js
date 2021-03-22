import React from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
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
      {(this.state.currentPage!=="login" && this.state.currentPage!=="signup" ) && <Header navigate={this.navigateTo} />}
      <div>
        {this.state.currentPage === "login" && <Login navigate={this.navigateTo} />}
        {this.state.currentPage === "signup" && <Signup navigate={this.navigateTo} />}
        {this.state.currentPage === "map" && <Map />}
        {this.state.currentPage === "profile" && <Profile />}
      </div>
    </>;
  };
  
}

export default App;
