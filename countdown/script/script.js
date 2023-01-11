import Countdown from "./countdown.js"

const lancamento = new Countdown(`${tempo()} GMT-0300`)


const btnTimer = document.querySelector('#btnTimer')

btnTimer.addEventListener('click', tempo)


function tempo() {
    let timer = document.querySelector("#timerLanc").value


    if (timer) {
        const mesesPt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Setembro', 'Outrubro', 'Novembro', 'Dezembro']
        const mesesIg = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        const mes = timer.split(" ")
        let repetir = 1

        if(repetir == 1){
            for (var i = 0; i <= mes.length; i++) {

                for (var j = 0; j <= (mesesPt.length - 1); j++) {
    
                    if (mes[i] == mesesPt[j]) {
    
                        mes[i] = mesesIg[j]
    
                        repetir += 1;
                    }
                }
            }

            timer = mes

            const removeInputTimer = document.querySelector(".containerTimer");

            removeInputTimer.classList.add('close')
            removeInputTimer.classList.remove('containerTimer')
        }
        
    }




    return(timer)
}










// const lancamento = new Countdown("07 september 2023 21:00:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {

    tempos.forEach((tempo, index) => {

        if (lancamento) {
            tempo.innerHTML = lancamento._total[index];
        }

    })

}

mostrarTempo();
setInterval(mostrarTempo, 1000);




//Abrindo o formulário    
const btnForm = document.querySelector(".btn1");

btnForm.addEventListener("click", () => {

    document.querySelector(".formulario").classList.remove("close");

})


//fechando o formulário    
const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", () => {

    document.querySelector(".formulario").classList.add("close");

})



