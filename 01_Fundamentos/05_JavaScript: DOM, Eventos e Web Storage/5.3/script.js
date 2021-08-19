window.onload = function() {
    function createDaysOfTheWeek() {
        const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        const weekDaysList = document.querySelector('.week-days');
    
        for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
    
        weekDaysList.appendChild(dayListItem);
        };
    };
    
    createDaysOfTheWeek();

    function createMonthDays() {
        const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        const dias = document.querySelector('#days');
        
        for (let i = 0; i < dezDaysList.length; i += 1) {
            const nmbrs = dezDaysList[i]
            const list = document.createElement('li');
            list.innerText = nmbrs;
            list.classList.add('day');

            if (i === 25 | i === 26 | i === 32) {
                list.classList.add('holiday');
            }
            if (i === 5 | i === 12 | i === 19 | i === 26) {
                list.classList.add('friday');
            }
            dias.appendChild(list);
        }
    }

    createMonthDays();

    const btncontainer = document.querySelector('.buttons-container');
    function createHButton(Feriados) {

        const btn = document.createElement('button');
        btn.id = 'btn-holiday';
        btn.innerText = Feriados;

        btncontainer.appendChild(btn);
    }

    function createFButton(sextaFeira) {
        const btn = document.createElement('button');
        btn.id = 'btn-friday';
        btn.innerText = sextaFeira;

        btncontainer.appendChild(btn);
    }

    createFButton('Sexta-Feira');
    createHButton('Feriados');
    const btnH = document.querySelector('#btn-holiday');
    const btnF = document.querySelector('#btn-friday');
    let clickedH = false;
    let clickedF = false;
    
    btnF.addEventListener('click', reciveClickWord);
    btnH.addEventListener('click', reciveClick);

    function reciveClick(){
        const hlds = {
            feriado1: document.querySelectorAll('.holiday')[0],
            feriado2: document.querySelectorAll('.holiday')[1],
            feriado3: document.querySelectorAll('.holiday')[2]
    }

        if (clickedH === false){
            clickedH = true;
            for (let i in hlds){
            hlds[i].style.backgroundColor = 'blue';
        }
        } else {
            clickedH = false;
            for (let i in hlds){
                hlds[i].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    }
    const bckup = [document.querySelectorAll('.friday')[0].innerText, 
    document.querySelectorAll('.friday')[1].innerText, 
    document.querySelectorAll('.friday')[2].innerText, 
    document.querySelectorAll('.friday')[3].innerText,];
    
    function reciveClickWord(){
        const hlds = {
            sexta1: document.querySelectorAll('.friday')[0],
            sexta2: document.querySelectorAll('.friday')[1],
            sexta3: document.querySelectorAll('.friday')[2],
            sexta4: document.querySelectorAll('.friday')[3]
    }

        if (clickedF === false){
            clickedF = true;
            for (let i in hlds){
            hlds[i].innerText = 'SEXTOU!!';
        }
        } else {
            clickedF = false;
            for (let i = 0; i < bckup.length; i += 1){
                document.querySelectorAll('.friday')[i].innerText = bckup[i];
            }
        }
    }


};
  // Escreva seu código abaixo.