import React from 'react';
import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Adress from './Adress';

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

  handleRemoveSpecialCharacters = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value.replace(/[^a-zA-Z0-9 ]/g, ""),
    })
  }

  render() {
    return (
      <div class="Forms">  
        <h1>Meu Formulario!</h1>
        <form>
          <h2> Informações Pessoais: </h2>
          <fieldset className='personal-data'>
          <Name functionHandler={this.handleChanges} value={this.state.name.length} />
          <Email functionHandler={this.handleChanges} />
          <CPF functionHandler={this.handleChanges} />
          <Adress functionHandler={this.handleRemoveSpecialCharacters} />
          </fieldset>
        </form>
      </div>  
    );
  }
}

export default Forms;