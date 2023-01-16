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
                        }

                    } else if (minutes) {
                        if (inputsTimer.classList.contains('inputMinutes')) {
                            inputsTimer.value = meuValor + 1
                        }
                    } else {
                        if (inputsTimer.classList.contains('inputSeconts')) {
                            inputsTimer.value = meuValor + 1
                        }
                    }

                } if(cancelar){
                    const inputName = document.querySelector('.NameCronometro input')

                    inputsTimer.value = ''
                    inputName.value = ''


                    telaNewCronometro.classList.add("newPostCancel")


                }
                else {
                    if (Hour) {
                        if (inputsTimer.classList.contains('inputHour')) {
                            inputsTimer.value = meuValor - 1
                        }

                    } else if (minutes) {
                        if (inputsTimer.classList.contains('inputMinutes')) {
                            inputsTimer.value = meuValor - 1
                        }
                    } else {
                        if (inputsTimer.classList.contains('inputSeconts')) {
                            inputsTimer.value = meuValor - 1
                        }
                    }
                }

        })



    })

})






// iniciando o formulario

const start = window.document.querySelector('.start')


let cardContainer = document.querySelectorAll('.container-cards')
// const hours = document.querySelectorAll('.timer .hours')
// const minutes = document.querySelectorAll('.timer .hours')




let minutes = false
let seconds = false
let hora = false

start.addEventListener('click', () => {
    const temporizador = document.querySelectorAll('.timerList')

    temporizador.forEach(timer => {

        let tempo = Number(timer.innerHTML)

        let isHours = timer.classList.contains('hours')
        let isMinutes = timer.classList.contains('minutes')
        let isSeconds = timer.classList.contains('seconds') 

        // console.log(tempo)

        
        
        

        if(isSeconds){
            if(tempo == 2){
                seconds = true
            }
            if(tempo <= 1){
                tempo = 60   
            }
            
            timer.innerHTML = tempo - 1
        }
        
        if(seconds){

            if(isMinutes){
                if(tempo == 1){
                    minutes = true
                }
                if(tempo <= 1){
                    tempo = 60
                }

                timer.innerHTML = tempo -1
                
                seconds = false
            }

            


        }

        if(seconds = true  minutes = true){

            if(isHours){

                timer.innerHTML = tempo - 1

                minutes = false
    
            }

        }
    })
})



// console.log(seconts)









// cardContainer.forEach(cardsContainer => {
// })


