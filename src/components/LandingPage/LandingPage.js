import React, { Component } from "react";
import {  Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      
      <>                
            <h1>Be Somebody LandingPage</h1>
            <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/newgame">New Game</Link></li>
            <li><Link to="/playgame">Continue Game</Link></li>
          
          </ul>
        </>
        
      
      
    )
  }
}

export default LandingPage;