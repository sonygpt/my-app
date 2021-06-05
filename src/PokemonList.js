import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Gallery from 'react-grid-gallery';
 
class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=10")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            name: `${data.name}`,
            url: `${data.url}`,
            thumbnail: `${data.name}.jpg`

          }
        )))
        .then(pokemons => this.setState({pokemons}))
        .catch(error => console.log('Error fetching data for pokemons : ', error))
    }

 	render() {
      const {pokemons} = this.state;
        return (
          <div className="pokemonMainPage">
              <div className="pokemonList">
                {
                  pokemons.length > 0 ? pokemons.map((item,idx) => {
                  const {name, thumbnail} = item;
                  const cardKey = `card${name}`;
                  const pokemonKey = `pokemon${name}`;
                  const cardHeaderKey = `header${name}`;
                  const imgSrc = require(`../public/${name}.jpg`).default;
                  let urlDetail = "/pokemon_detail/"+name;
                  return (
                        <div key={cardKey} className="pokemonCards">
                          <div key={cardHeaderKey} className="pokemonCardHeader">{++idx}</div>
                          <NavLink key={name}  to={urlDetail}>
                            <img 
                              src={imgSrc}
                              title={name} 
                              alt={name}
                              className="imgPokemon"
                            />
                         </NavLink>
                         <div key={pokemonKey} className="pokemonName">{name}</div>
                      </div>           
                  );
                }) : null
              }
              </div>
          </div>
        );
    }
}
 
export default PokemonList;