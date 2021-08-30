const arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

const arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal',
'Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba',
'Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia',
'Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

function createOptions() {
  for (let i in arraySiglaEstado) {
    const option = document.createElement('option');
    const select = document.querySelector('#states');
    option.innerText = arrayTextoEstado[i];
    option.value = arraySiglaEstado[i];
    option.className = 'state';
    select.appendChild(option)
  }
}
createOptions()

document.getElementById('date').DatePickerX.init();

const date = document.getElementById('date');
date.format(dd/mm/yyyy);

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    email: {
      required: true,
      email: true,
    },
    cpf: {
      required: true,
      maxLength: 14
    },
    adress: {
      required: true,
    },
    city: {
      required: true,
    },
    state: {
      required: true,
    },
    radio: {
      required: true
    },
    resume: {
      required: true,
    },
    carg: {
      required: true,
    },
    descr: {
      required: true,
    },
    date: {
      required: true
    },
  },
  messages: {
    name: {
      required: 'O campo de nome é obrigatório.',
      maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
      email: 'Insira um email válido.',
      required: 'O campo de email é obrigatório.',
    },
    cpf: {
      required: 'O campo de CPF é obrigatório.',
      maxLength: 'O limite é de 14 caracteres.'
    },
    adress: {
      required: 'O campo de endereço é obrigatório.',
    },
    city: {
      required: 'O campo de cidade é obrigatório.',
    },
    states: {
      required: 'O campo de estado é obrigatório.',
    },
    radio: {
      required: 'O campo de tipo é obrigatório.',
    },
    resume: {
      required: 'O campo de resumo é obrigatório.',
    },
    carg: {
      required: 'O campo de cargo é obrigatório.',
    },
    descr: {
      required: 'O campo de descrição é obrigatório.',
    },
    date: {
      required: 'O campo de data é obrigatório.'
    }
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }});