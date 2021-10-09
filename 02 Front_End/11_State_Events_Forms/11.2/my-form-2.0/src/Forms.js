import React from 'react';
import Name from './Name';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    }
  }

  handleChanges = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div class="Forms">  
        <h1>Meu Formulario!</h1>
        <form>
          <fieldset className='personal-data'>
          <Name functionHandler={this.handleChanges} value={this.state.name.length}/>
          </fieldset>
        </form>
      </div>  
    );
  }
}

export default Forms;
