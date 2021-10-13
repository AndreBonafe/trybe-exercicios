import React from 'react';
import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Adress from './Adress';
import City from './City';
import State from './State';
import Type from './Type';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      city: '',
    }
  }

  handleChanges = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value,
    })
  }
  
  handleUppercase = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value.toUpperCase(),
    })
  }

  handleRemoveSpecialCharacters = ({ target }) => {
    const { name, value } = target
    this.setState({
      [name]: value.replace(/[^a-zA-Z0-9 ]/g, ""),
    })
  }

  handleBlur = ({ target }) => {
    if (!isNaN(this.state.city[0])) {
      target.value = '';
    }
  }

  render() {
    return (
      <div className="Forms">  
        <h1>Meu Formulario!</h1>
        <form autoComplete="off">
          <h2> Informações Pessoais: </h2>
          <fieldset className='personal-data'>
          <Name functionHandler={this.handleUppercase} value={this.state.name.length} />
          <Email functionHandler={this.handleChanges} />
          <CPF functionHandler={this.handleChanges} />
          <Adress functionHandler={this.handleRemoveSpecialCharacters} />
          <State functionHandler={this.handleChanges}/>
          <City functionHandler={this.handleChanges} functionHandlerBlur={this.handleBlur} />
          <Type functionHandler={this.handleChanges}/>
          </fieldset>
        </form>
      </div>  
    );
  }
}

export default Forms;
