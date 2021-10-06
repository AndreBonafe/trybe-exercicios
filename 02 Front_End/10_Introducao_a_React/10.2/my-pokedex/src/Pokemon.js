import React from 'react';

class Pokemon extends React.Component {
    render() {
        return(
            <div key={this.props.pokemon.name} class = "pokemon">
                <div class="pokemon-p">
                    <p>{this.props.pokemon.name}</p>
                    <p>{this.props.pokemon.type}</p>
                    <p> Average Weight:
                    {this.props.pokemon.averageWeight.value} 
                    {this.props.pokemon.averageWeight.measurementUnit}
                    </p>
                </div>
                <img alt="foto do pokemon" src={this.props.pokemon.image}></img>
            </div>
        );
    }
}

export default Pokemon;