import React from 'react';

class Email extends React.Component {
  render() {
    return (
      <label> Email:
        <input autoComplete="off" maxLength={50} onChange={this.props.functionHandler} name='email' required></input>
      </label>
    );
  }
}

export default Email;
