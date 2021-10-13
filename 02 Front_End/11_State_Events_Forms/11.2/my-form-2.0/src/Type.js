import React from 'react';

class Type extends React.Component {
  render() {
    return (
      <div>
        <span> Tipo: </span>
        <div className="Radio-Buttons">
          <input required type='radio' autoComplete="off" name='Tipo' value="Apartamento"/>
          <label for="Apartamento"> Apartamento </label>
          <input required type='radio' autoComplete="off" name='Tipo' value="Casa"/>
          <label for="Casa"> Casa </label>
        </div>
      </div>
  );
  }
}

export default Type;