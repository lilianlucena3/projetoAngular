import React, { Component } from "react";
import imageLogo from '../src/imgs/logo.png';

class Navbar extends Component {
  render() {
      return(
        <div className="App boxShadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
          <a className="navbar-brand" href="/">
            <img src={imageLogo} />       
          </a>
        </nav>
        
      </div>  )
  }
}

export default Navbar ;
