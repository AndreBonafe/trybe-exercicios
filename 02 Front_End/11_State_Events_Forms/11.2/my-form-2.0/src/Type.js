import React from 'react';

class Type extends React.Component {
  render() {
    return (
      <div>
        <span> Tipo: </span>
        <div className="Radio-Buttons">
          <input required type='radio' autoComplete="off" name='Tipo' value="Apartamento" onClick={this.props.functionHandler} />
          <label htmlFor="Apartamento"> Apartamento </label>
          <input required type='radio' autoComplete="off" name='Tipo' value="Casa" onClick={this.props.functionHandler} />
          <label htmlFor="Casa"> Casa </label>
        </div>
      </div>
  );
  }
}

export default Type;