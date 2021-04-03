import React, { Component } from "react";


class CharacterChoice extends Component {
  render() {


    const characters = ["Nadia", "Ravi", "Marie"];
    const charactersObject = characters.map((name, i) => ({ id: i, name: name }));
    // this is static data to be replaced when the backend is ready
    console.log(charactersObject);

    return (
      
        <>
            <h1>CharacterChoice Page</h1>
            <ul>
          {charactersObject.map((name) => (
            < li key={name.id} >Options: {name.name}</li>
            ))}
            </ul>
        </>
        
      
      
    )
  }
}

export default CharacterChoice;