import React, { Component } from "react";

import PropTypes from "prop-types";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import AdminPage from "../AdminPage";
import UserPage from "../UserPage";
import NotFoundPage from "../NotFoundPage";

import GamePage from "../bs_Pages/GamePage";
import HomePage from "../bs_Pages/HomePage";

class Router extends Component {
  render() {
    // Properties
    const { user, roles, bar } = this.props;

    // Functions
    const { openSnackbar } = this.props;

    return (
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        
        <Switch>
          
          <Route path="/" exact>
            <HomePage user={user} openSnackbar={openSnackbar} bar={bar} />
          </Route>

          <Route path="/login" exact>
            {bar}            
                  
            Login Page 
          </Route>

          <Route path="/newgame" exact>
            
            {user ? <GamePage subpage="CharacterChoice" /> : <Redirect to="/" />}
          </Route>

          <Route path="/playgame" exact>
            
            {user ? <GamePage subpage = "NarrativeGame"/> : <Redirect to="/" />}
          </Route>


          <Route path="/admin">
            {user && roles.includes("admin") ? (
              <AdminPage />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route path="/user/:userId">
            {user ? <UserPage /> : <Redirect to="/" />}
          </Route>

          <Route>
            <NotFoundPage />
          </Route>

        </Switch>

      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  // Properties
  user: PropTypes.object,
  roles: PropTypes.array.isRequired,
  bar: PropTypes.element,

  // Functions
  openSnackbar: PropTypes.func.isRequired,
};

export default Router;
