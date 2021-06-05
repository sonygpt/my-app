import React, { Component } from "react";
import { PokemonConsumer } from './Pokemon-Context';

class MyPokemon extends Component {
  render() {
    return (
	 <PokemonConsumer>
      {({ pokemon, releasepokemon }) => (
	 	 <React.Fragment>
			<div className="myPokemonList">
	        <h2><i>MY POKEMON</i></h2>
	        {
              pokemon.length > 0 ? pokemon.map(item => {
              const {name, nickname} = item;
			  const imgSrc = require(`../public/${name}.jpg`).default;
    
               return (
               	<div className="myPokemon" key={Math.random()}>
	                <img 
	                  src={imgSrc} 
	                  title={name} 
	                  alt={name}
	                />
	                <center>
		                <h3>{nickname}</h3>
		                <button className="myPokemonBtn" onClick={() => releasepokemon(name)}>Release ></button>
		            </center>
	            </div>
              );
            }) : null
          }
		  </div>
	     </React.Fragment>
	   )}
     </PokemonConsumer>
    );
  }
}
 
export default MyPokemon;