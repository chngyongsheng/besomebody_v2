import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import ResponsiveDrawer from "../SideBar/SideBar.js";

class GamePage extends Component {

    render() {

        return (
            
            <>
                
                <div>
                    The Game Character Menu will go here.If the user has already started a game the continue game option will be prominent.</div>
                
            </>    

        );
    }
}

  

export default GamePage;

//<ResponsiveDrawer />