import Countdown from "./countdown.js"

const lancamento = new Countdown(`${tempo()} GMT-0300`)




const btnTimer = document.querySelector('#btnTimer')

btnTimer.addEventListener('click', tempo)


function tempo(){
    console.log('click')
    const timer = document.querySelector("#timerLanc").value

    const mes = timer.split(" ")

    // for(var i=0; i <= mes.length; i++){
        
    //     console.log('feliz' + i)
    // };

    
    
    return(timer)
}










// const lancamento = new Countdown("07 september 2023 21:00:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){

  tempos.forEach((tempo, index) => {

    if(lancamento){
        tempo.innerHTML = lancamento._total[index];
    }

    })

}

mostrarTempo();
setInterval(mostrarTempo, 1000);




//Abrindo o formulário    
    const btnForm = document.querySelector(".btn-form");

    btnForm.addEventListener("click", () => {
        
        document.querySelector(".formulario").classList.remove("close");

    })


//fechando o formulário    
const btnClose = document.querySelector(".btn-close");

btnClose.addEventListener("click", () => {
    
    document.querySelector(".formulario").classList.add("close");

})



