import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import SideBar from "../../bs_Reusables/SideBar";
import CharacterChoice from "../../bs_Pages/CharacterChoice";



class GamePage extends Component {
    constructor(props) {
        super(props);      
    }

    changePage(param) {
        switch (param) {
            case 'CharacterChoice':
                return <CharacterChoice />;
            case 'NarrativeGame':
                return "Narrative Game";                
        }
    }

       
    render() {
        const { user , userData, subpage } = this.props;
        
        return (
            
            <>
                
                <SideBar user={user} userData={userData}/>
                {this.changePage(this.props.subpage)}

               
            </>    

        );
    }
}

  

export default GamePage;

