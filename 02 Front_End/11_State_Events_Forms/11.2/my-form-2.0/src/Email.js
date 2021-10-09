import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <label> Email:
        <input required maxLength={50} autoComplete="off" onChange={this.props.functionHandler} name='email'></input>
      </label>
    );
  }
}

export default Email;
