import React, { useEffect, useState } from "react";


export function PokemonList(){
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemons, setPokemons] = useState()
    const fetchApi = async () => {
        const response = await fetch (url)
        const responseJSON = await response.json()
        setPokemons(responseJSON)
        console.log(responseJSON)
    }
    useEffect(() => {
        fetchApi()},
        []);
    return (
        <div className="Pokemons">
            <h1>Hola</h1>
        </div>
    )    
}