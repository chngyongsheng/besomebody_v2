import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import SideBar from "../../bs_Reusables/SideBar";
import CharacterChoice from "../../bs_Pages/CharacterChoice";



class GamePage extends Component {
    constructor(props) {
        super(props);
        console.log('GamePage');
        console.log(props);
    }
       
    render() {
        const { user , userData } = this.props;

        
        return (
            
            <>
                
                <SideBar user={user} userData={userData}/>

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