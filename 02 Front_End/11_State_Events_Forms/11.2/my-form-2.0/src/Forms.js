import React from 'react';
import Name from './Name';
import Email from './Email';
import CPF from './CPF';
import Adress from './Adress';
import City from './City';
import State from './State';
import Type from './Type';
import Carg from './Carg';
import FormDataDisplay from './FormDataDisplay';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      warned: 0,
      name: '',
      email: '',
      cpf: '',
      city: '',
      submitted: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    })
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

  warningHandle = () => {
    if (this.state.warned === 0) {
      alert('Preencha com cuidado esta informação.');
      this.setState({
        warned: 1,
      })
    }
  }

  resetForm = () => this.setState({ submitted: false, })

  render() {
    return (
      <div className="Forms">  
        <h1>Meu Formulario!</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <h2> Informações Pessoais: </h2>
          <fieldset className='personal-data'>
            <Name functionHandler={this.handleUppercase} value={this.state.name.length} />
            <Email functionHandler={this.handleChanges} />
            <CPF functionHandler={this.handleChanges} />
            <Adress functionHandler={this.handleRemoveSpecialCharacters} />
            <State functionHandler={this.handleChanges} />
            <City functionHandler={this.handleChanges} functionHandlerBlur={this.handleBlur} />
            <Type functionHandler={this.handleChanges} />
          </fieldset>
          <h2> Último emprego: </h2>
          <fieldset>
            <label> Resumo:
              <textarea required onChange={this.handleChanges} name='Resume' maxLength={1000}/>
            </label>
            <Carg functionHandler={this.handleChanges} warning={this.warningHandle}/>
            <label> Descrição do Cargo:
              <textarea required onChange={this.handleChanges} name='cargDes' maxLength={500}/>
            </label>
          </fieldset>
          <button>Enviar</button>
          <button type="reset" onClick={this.resetForm}>Limpar</button>
        </form>
        { this.state.submitted && <FormDataDisplay infos={this.state} /> }
      </div>  
    );
  }
}

export default Forms;
