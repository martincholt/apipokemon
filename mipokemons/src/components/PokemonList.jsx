import React, { useEffect, useState } from "react";
import { getAllPokemons } from "../services/pokemonService";
import { PokemonCard } from "./PokemonCard";
import Style from "../styles/pokemonList.module.css"

export function PokemonList(){
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getAllPokemons().then((resp) => setPokemons(resp.results));  
    },[]);
    return (
        <div className={Style.container}>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard pokemonName={pokemon.name} pokemonUrl={pokemon.url} key={index} />)
                )}   
        </div>
    );    
}
