import React from 'react';

class CPF extends React.Component {
  render() {
    return (
      <label> CPF:
        <input required maxLength={11} autoComplete="off" onChange={this.props.functionHandler} name='cpf'></input>
      </label>
    );
  }
}

export default CPF;