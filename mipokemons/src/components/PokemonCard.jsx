export function PokemonCard(props) {
    return (
      <div>
        <div className="card">
          <div className="card-name">
              <div className="cardName">Pokemon: {props.pokemon.name}</div>
          </div>  
          <div className="card-image">
            <img src={props.pokemon.images} alt={props.pokemon.name} />
          </div>
        </div>
      </div> 
    );
  }