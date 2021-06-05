import React, { Component } from "react";
import { PokemonConsumer } from './Pokemon-Context';

class PokemonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon_details: [],
      name: ""
    };
  }

  componentDidMount() {
    let url           = window.location.href;
    let url_split     = url.split("/");
    let pokemon_name  = url_split[5];

    fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon_name)
      .then(res => res.json())
      .then(pokemon_details => this.setState({
        pokemon_details,
        name: pokemon_name
      }))
      .catch(error => console.log('parsing failed', error))
  }

  render() {
    const {name,pokemon_details} = this.state;
	let pokemonTypes = "", typeIndex = 0 , pokemonAbilities = "" , abilitiesIndex = 0;
	var imgSrc ;

	if(pokemon_details.types){
		pokemon_details.types.forEach(item => {
			const {type} = item;
			pokemonTypes += `${type.name} ,`
		     
		}) 
	}		

	if(pokemon_details.abilities){
		pokemon_details.abilities.forEach(item => {
			const {ability} = item;
			pokemonAbilities += `${ability.name} ,`
		     
		}) 
	}		

	typeIndex = pokemonTypes.lastIndexOf(',');
	pokemonTypes = pokemonTypes.substring(0,typeIndex); 

	abilitiesIndex = pokemonAbilities.lastIndexOf(',');
	pokemonAbilities = pokemonAbilities.substring(0,abilitiesIndex); 
	
	if(name != "")
		imgSrc=require(`../public/${name}.jpg`).default;

	  function catchPokemon(){
	  	if (Math.random() >= 0.5){
		  	return prompt(`Enter a nickname for ${name}`);
	  	}else{
		  	alert(`You are unable to catch ${name}`);
		  	return false;
	  	}
	  }

    return (
	 <PokemonConsumer>
      {({ updatepokemon }) => (
		  <div className="container">
			  <div className="subContainer">
	      <div id="pokemonDetail">
			  <div className="pokemonCard">
				<div className="detailsHeader">
					<div className="capitalize">{name}</div>	
					<button className="button" onClick={event => {
					let nickname = catchPokemon();
					if(nickname){
						updatepokemon([{name: name, nickname: nickname}]);
						alert("Pokemon successfully added to My Pokemon !");
					}
					}}>Catch </button>
				</div>
				<div>
					<img 
					src={imgSrc} 
					title={name} 
					alt={name}
					className="pokemonDetailsImg"
					/>
				</div>
				<div className="pokemonDetails">
					<div className="basicDetailsRow">
						<div className="basicDetails">Height : {pokemon_details.height} ft.</div>
						<div className="basicDetails">Weight : {pokemon_details.weight} lbs</div>
						<div className="basicDetails">Order : {pokemon_details.order}</div>
						<div className="basicDetails">Base Experience : {pokemon_details.base_experience}</div>
						<div className="basicDetails">Types : {pokemonTypes}</div>
					</div>
				</div>
	          </div>
			  </div>
	      </div>
		  </div>
      )}	      
	  </PokemonConsumer>
    );
  }
}
 
export default PokemonDetail;