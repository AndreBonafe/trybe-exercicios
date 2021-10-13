import React from 'react';

class FormDataDisplay extends React.Component {
  render() {
    const { infos } = this.props;
    return (
      <div className='form-data'>
        <h2> Informações Pessoais: </h2>
        <div>{`Nome: ${infos.name}`}</div>
        <div>{`Email: ${infos.email}`}</div>
        <div>{`CPF: ${infos.cpf}`}</div>
        <div>{`Endereço: ${infos.adress}`}</div>
        <div>{`Estado: ${infos.estado}`}</div>
        <div>{`Cidade: ${infos.city}`}</div>
        <div>{`Residencia: ${infos.Tipo}`}</div>
        <h2> Último Emprego: </h2>
        <div>{`Resumo: ${infos.Resume}`}</div>
        <div>{`Cargo: ${infos.carg}`}</div>
        <div>{`Descrição do cargo: ${infos.cargDes}`}</div>
      </div>
    );
  }
}

export default FormDataDisplay;