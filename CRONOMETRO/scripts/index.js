const telaNewCronometro = document.querySelector("#newPost")



//adicionando tela de novo cronometro
const btnAdc = document.querySelector('.adc')

btnAdc.addEventListener('click', () => {

    telaNewCronometro.classList.remove("newPostCancel")

})







// editando formulario para adição de tempo
const inputTimer = document.querySelectorAll('.addTimer input')
const controlsTimer = document.querySelectorAll('.btnNewCronometro')


controlsTimer.forEach(inputsTimer => {

    inputsTimer.addEventListener('click', () => {

        const adicionar = inputsTimer.classList.contains('adicionar')
        const cancelar = inputsTimer.classList.contains('cancelar')

        const Hour = inputsTimer.classList.contains('hours')
        const minutes = inputsTimer.classList.contains('minutes')


        inputTimer.forEach(inputsTimer => {

                let meuValor = Number(inputsTimer.value)

                if (adicionar) {


                    if (Hour) {
                        if (inputsTimer.classList.contains('inputHour')) {
                            inputsTimer.value = meuValor + 1

                            inputsTimer.value = formateNumber(inputsTimer.value)

                        }

                    } else if (minutes) {
                        if (inputsTimer.classList.contains('inputMinutes')) {
                            inputsTimer.value = meuValor + 1

                            inputsTimer.value = formateNumber(inputsTimer.value)
                        }
                    } else {
                        if (inputsTimer.classList.contains('inputSeconts')) {
                            inputsTimer.value = meuValor + 1

                            inputsTimer.value = formateNumber(inputsTimer.value)
                        }
                    }

                } else{
                    if (Hour) {
                        if (inputsTimer.classList.contains('inputHour')) {
                            inputsTimer.value = meuValor - 1

                            inputsTimer.value = formateNumber(inputsTimer.value)
                        }

                    } else if (minutes) {
                        if (inputsTimer.classList.contains('inputMinutes')) {
                            inputsTimer.value = meuValor - 1

                            inputsTimer.value = formateNumber(inputsTimer.value)
                        }
                    } else {
                        if (inputsTimer.classList.contains('inputSeconts')) {
                            inputsTimer.value = meuValor - 1

                            inputsTimer.value = formateNumber(inputsTimer.value)
                        }
                    }
                }
                
                
                
                
                
                
                
                
                
                
                
                if(cancelar){
                    
                    windowTimer(inputsTimer);

                }

        })



    })

})





function formateNumber(number){
    if(number < 10 & number >= 0){
        return (`0` + number)
    }

}



function reTimer(horas, minutes, seconts){
    if(horas){

    }else if(minutes){

    }else if(seconts){

    }
}




function windowTimer(inputTimer){
    const inputName = document.querySelector('.NameCronometro input')

    inputTimer.value = ''
    inputName.value = ''


    telaNewCronometro.classList.add("newPostCancel")
}


























// Pegando o valor inserido pelo usuário e criando card com o timer!

//criar novo card assim que o botão salvar for clicado


const save = document.querySelector(".btn_salve")


save.addEventListener("clik", () => {


    //criar novo card e inserir os valores de acordo com o usuário

    //pegando a div pai e adicionando os filhos

    //container = pai
    const container = document.querySelector(".container")



    //.container-cards = filho de container
    const newDiv = document.createElement("div")
    container.appendChild(newDiv)
    newDiv.classList.add('container-card')

    //pai containerCard
    const cardContainer = document.querySelector(".container-card")
    //h3 class=title = filho de .topo

    for(var i=0; i <= 2; i++){
        cardContainer.appendChild(newDiv)
        
        if(i=0){
            //.topo = filho de container-cards
            newDiv.classList.add('topo')

            const title = document.createElement('h3')
            const text = document.createTextNode(inputName)

            title.appendChild(text)

            const topo = document.querySelector('.topo')
            topo.appendChild(titulo) 
        }else if(i=2){
            //temporizador = filho de container
            newDiv.classList.add('temporizador')

            const temporizador = document.querySelector(".tmeporizador")
            temporizador.appendChild(newDiv)
            newDiv.classList.add('border-timer')

            const borderTimer = document.querySelector(".border-timer")
            borderTimer.appendChild(newDiv)
            newDiv.classList.add("timer")

            //border-timer = filho de temporizador
            const timer = document.querySelector(".timer")
            const ul = createElement('ul')
            timer.appendChild(ul)

            //li filho de temporizador
            const timerUl = document.querySelector(".timer ul")
            const li = createElement('li')

            timerUl.appendChild(li)
            timerUl.classList.add("timerlist hours")
            timerUl.value = inputHour.value

            timerUl.appendChild(li)
            timerUl.classList.add("timerlist minutes")
            timerUl.value = inputminutes.value

            timerUl.appendChild(li)
            timerUl.classList.add("timerlist seconds")
            timerUl.value = inputseconds.value

        }else{
            //.acao = filho de container
            newDiv.classList.add('acao')
            
            const action = document.querySelector('.acao')
            const svg = createElement('svg')
            
            action.appendChild(svg)
            timerUl.classList.add("start")

            action.appendChild(svg)
            timerUl.classList.add("pause or")

            action.appendChild(svg)
            timerUl.classList.add("redefenir")
        }
    }


    //fechar janela
    windowTimer()
})










//formulario, configurand o tempo

