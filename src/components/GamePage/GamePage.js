import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import SideBar from "../SideBar";
import CharacterChoice from "../CharacterChoice";


class GamePage extends Component {

    render() {

        return (
            
            <>
                
                <SideBar />
                {(() => {
                    switch (this.props.subpage) {
                    case "CharacterChoice": return <CharacterChoice />;
                    case "NarrativeGame": return "Narrative Game";
                    default: return null;
                    }
                })}

                {this.props.subpage}
            </>    

        );
    }
}

  

export default GamePage;

//<ResponsiveDrawer />