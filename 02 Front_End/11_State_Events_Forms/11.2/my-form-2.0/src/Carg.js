import React from 'react';

class Carg extends React.Component {
  render() {
    const { functionHandler, warning } = this.props
    return (
      <label> Cargo:
        <input required maxLength={40} onChange={functionHandler} name='carg' onMouseEnter={warning}/>
      </label>
    );
  }
}

export default Carg;