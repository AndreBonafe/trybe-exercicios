/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

document.getElementsByTagName('p')[0].innerText = 'Me vejo em uma empresa legal com um salario bacana.'
document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName("center-content")[0].style.backgroundColor = 'white';
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript' 
for (let i in document.getElementsByTagName('p')){
    document.getElementsByTagName('p')[i].style.textTransform = 'uppercase';
    console.log(document.getElementsByTagName('p')[i]);
}

 

 // document.querySelector("h1").style.backgroundColor = 'green';
// document.querySelector("h1").style.padding = '100px auto';
// document.querySelector(".emergency-tasks").style.backgroundColor = '#f2a283';
// document.querySelectorAll(".emergency-tasks div h3")[0].style.backgroundColor = 'purple';
// document.querySelectorAll(".emergency-tasks div h3")[1].style.backgroundColor = 'purple';
// document.querySelector(".no-emergency-tasks").style.backgroundColor = '#e0c946';
// document.querySelectorAll(".no-emergency-tasks div h3")[0].style.backgroundColor = 'black';
// document.querySelectorAll(".no-emergency-tasks div h3")[1].style.backgroundColor = 'black';
// document.querySelector("footer").style.backgroundColor = 'darkGreen';

       


