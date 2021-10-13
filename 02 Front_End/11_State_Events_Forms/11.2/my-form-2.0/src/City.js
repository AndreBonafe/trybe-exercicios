import React from 'react';

class City extends React.Component {
  render() {
    return (
      <label> Cidade:
        <input required maxLength={28} autoComplete="off" onChange={this.props.functionHandler} name='city'
        onBlur={this.props.functionHandlerBlur}></input>
      </label>
    );
  }
}

export default City;