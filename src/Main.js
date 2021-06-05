import React, { Component }  from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import PokemonList from "./PokemonList";
import PokemonDetail from "./PokemonDetail";
import MyPokemon from "./MyPokemon";
import {PokemonProvider} from "./Pokemon-Context";
import Logo from "./logo.png";

class Main extends Component{
	render(){
		return(
			<HashRouter>
				<PokemonProvider>
					<ul className="header">
						<NavLink to="/"><img id="logo" src={Logo} alt="Logo not loaded"/></NavLink>
						<div className="headerNav">
							<li><NavLink to="/my_pokemon">My Pokemon</NavLink></li>
							<li><NavLink to="/">Pokemon List</NavLink></li>
						</div>				
					</ul>
					<div className="content">
						<Route exact path="/" component={PokemonList} />
						<Route path="/pokemon_detail" component={PokemonDetail} />
						<Route path="/my_pokemon" component={MyPokemon} />
					</div>
				</PokemonProvider>
			</HashRouter>
		);
	}
}

export default Main;