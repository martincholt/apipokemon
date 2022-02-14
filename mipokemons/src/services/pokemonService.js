
export function getAllPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon', {method:"GET"})
        .then(res => res.json())
}

export async function getAllImages(){
  return fetch('https://pokeapi.co/api/v2/pokemon', {method:"GET"})
        .then(res => res.data)
}

/* export async function getAllImages(){
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = response.data;
  console.log(response);
  const images = data.sprites.other.home.front_default;
  return images;
} */
