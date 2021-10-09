import React from 'react';

class Name extends React.Component {
  render() {
    const {value} = this.props

    let error = undefined;
    if (value === 40) error = 'Limite de 40 caracteres!'

    return (
      <label> Nome:
        <input onChange={this.props.functionHandler} name='name' style={{
          textTransform: "uppercase",
        }} required maxLength={40} autoComplete="off"/>
        <span>{error ? error : ''}</span>
      </label>
      );
  }
}

export default Name;
