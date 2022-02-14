import React, { useEffect, useState } from "react";
import { getAllPokemons } from "../services/pokemonService";
import { PokemonCard } from "./PokemonCard";


export function PokemonList(){
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        getAllPokemons().then((resp) => setPokemons(resp.results));
    });
    return (
        <h1>
                {pokemons.map((pokemon) => (
                    <PokemonCard pokemon={pokemon} key={pokemon.index}/>)
                )}
        </h1>
    );    
}
