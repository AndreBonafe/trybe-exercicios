import React from 'react';

class Adress extends React.Component {
  render() {
    return (
      <label> Endereço:
        <input required maxLength={200} autoComplete="off" onChange={this.props.functionHandler} name='adress'></input>
      </label>
    );
  }
}

export default Adress;