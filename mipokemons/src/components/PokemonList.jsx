import React, { useEffect, useState } from "react";
import { getAllImages, getAllPokemons } from "../services/pokemonService";
import { PokemonCard } from "./PokemonCard";
import Style from "../styles/pokemonList.module.css"

export function PokemonList(){
    const [pokemons, setPokemons] = useState([]);
    const [images, setImg] = useState([0]);
    
    useEffect(() => {
        getAllPokemons().then((resp) => setPokemons(resp.results));
        getAllImages().then((resp) => setImg(resp.data));
    });
    return (
        <div className={Style.container}>
                {pokemons.map((pokemon) => (
                    <PokemonCard pokemon={pokemon} key={pokemon.index} img={images}/>)
                )}   
        </div>
    );    
}
