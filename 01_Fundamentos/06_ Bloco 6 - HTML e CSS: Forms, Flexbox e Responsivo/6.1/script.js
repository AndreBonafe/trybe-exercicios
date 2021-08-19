let arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

 let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal',
'Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba',
'Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia',
'Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

function createOptions() {
  for (let i in arraySiglaEstado) {
    const option = document.createElement('option');
    const select = document.querySelector('#states');
    option.innerText = arrayTextoEstado[i];
    option.value = arraySiglaEstado[i];
    select.appendChild(option)
  }
}

createOptions()

const button = document.querySelector('#button');
button.addEventListener('click', function (event){
  event.preventDefault();
  const date = document.querySelector('#date').value;

  const day = parseInt(date.substring(0, 2));
  const month = parseInt(date.substring(3, 5));
  const year = parseInt(date.substring(6, 10));

  if (day < 0 || day > 31) {
    alert("Dia inválido");
  }
  if (month < 0 || month > 12) {
    alert("Mês inválido");
  }
  if (year < 0) {
    alert("Ano inválido");
  }
})