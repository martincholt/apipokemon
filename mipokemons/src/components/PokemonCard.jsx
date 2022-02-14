export function PokemonCard(props) {
    return (
      <div>
        <div className="card">
          <div className="card-name">
              <div className="cardName">name: {props.pokemon.name}</div>
          </div>  
          {/* <div className="card-img">
            <img src={props.pokemon.img} alt={props.pokemon.name} />
          </div> */}
        </div>
      </div> 
    );
  }