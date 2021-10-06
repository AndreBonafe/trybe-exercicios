import React from 'react';
import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return(
            <div class="pokedex">
                {data.map(pokemon => 
                    <Pokemon pokemon={pokemon} /> 
                )}
            </div>
        );
    }
}

export default Pokedex;