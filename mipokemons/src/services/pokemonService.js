
export function getAllPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon', {method:"GET"})
        .then(res => res.json())
}

export async function getDataPokemon(pokemonUrl){
  return fetch (pokemonUrl, {method: "GET"})
  .then(res => res.json())
}
