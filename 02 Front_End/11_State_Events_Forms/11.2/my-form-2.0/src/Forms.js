import React from 'react';
import Name from './Name';
import Email from './Email';
import CPF from './CPF';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
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
          <Name functionHandler={this.handleChanges} value={this.state.name.length} />
          <Email functionHandler={this.handleChanges} />
          <CPF functionHandler={this.handleChanges} />
          </fieldset>
        </form>
      </div>  
    );
  }
}

export default Forms;
