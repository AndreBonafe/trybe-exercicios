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
    option.className = 'state';
    select.appendChild(option)
  }
}
createOptions()

const button = document.querySelector('#button');
button.addEventListener('click', function (event){
  
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

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const cpf = document.querySelector('#cpf').value;
  const adress = document.querySelector('#adress').value;
  const city = document.querySelector('#city').value;
  const resume = document.querySelector('#resume').value;
  const state = document.querySelector('#states').value;
  const casa = document.querySelector('#casa').checked;
  const ap = document.querySelector('#Apartamento').checked;
  const carg = document.querySelector('#carg').value;
  const descr = document.querySelector('#descr').value;
  const body = document.querySelector('body');
  const newDiv = document.createElement('div');
  const p0 = document.createElement('p');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const p7 = document.createElement('p');
  const p8 = document.createElement('p');
  const p9 = document.createElement('p');
  const p = document.createElement('p');

  p0.innerText = 'Nome: ' + name;
  p1.innerText = 'Email: ' + email;
  p2.innerText = 'CPF: ' + cpf;
  p3.innerText = 'Endereço: ' + adress;
  p4.innerText = 'Cidade: ' + city;
  p5.innerText = 'Estado: ' + state;

  if (ap === 'on') {
    p6.innerText = 'Tipo: Apartamento';
  } 
  if (casa) {
    p6.innerText = 'Tipo: Casa';
  }

  p7.innerText = 'Resumo do Curriculo: ' + resume;
  p8.innerText = 'Cargo: ' + carg;
  p9.innerText = 'Descrição: ' + descr;
  p.innerText = 'Data:' + date;
  newDiv.id = 'results';
  body.appendChild(newDiv);
  newDiv.appendChild(p0);
  newDiv.appendChild(p1);
  newDiv.appendChild(p2);
  newDiv.appendChild(p3);
  newDiv.appendChild(p4);
  newDiv.appendChild(p5);
  newDiv.appendChild(p6);
  newDiv.appendChild(p7);
  newDiv.appendChild(p8);
  newDiv.appendChild(p9);
  newDiv.appendChild(p);
})