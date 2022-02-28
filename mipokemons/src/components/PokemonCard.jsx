import { useState, useEffect } from "react";
import { getDataPokemon } from "../services/pokemonService";

export function PokemonCard(props) {
  const [images, setImages] = useState([]);
  const [abilities, setAbilities] = useState([]);
    useEffect(()=>{
        getDataPokemon(props.pokemonUrl)
        .then(res => setImages(res.sprites.other['official-artwork']['front_default']))      
    },[])
    useEffect(()=>{
      getDataPokemon(props.pokemonUrl)
    .then(res => setAbilities(console.log(res.abilities)))
    },[])
    return (
        <div className="card">
          <div className="card-image">
            <img src={images} alt={props.pokemonName} />
          </div>
          <div className="card-name">
              <div className="cardName">{props.pokemonName}</div>
          </div>  
          <div className="card-abilities">
              <div className="cardAbilities">Abilities: {abilities}</div>
          </div>  
        </div>
    );
  }