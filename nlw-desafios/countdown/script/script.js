import Countdown from "./countdown.js"

const lancamento = new Countdown("03 September 2022 21:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo(){
    
    tempos.forEach((tempo, index) => {

        tempo.innerHTML = lancamento._total[index];

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



