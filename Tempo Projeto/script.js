setInterval(displayclock, 1000);

const dataAtual = new Date()

const data_inicial = "24/02/2022 20:00:00"

function displayclock(){

        const dataFinal = new Date();
        const tempoProjeto = new Date(data_inicial - dataFinal)

        console.log(dataFinal)
}





function fechar(){
        var fundo = document.querySelector(".fundo")
        var btnClose = document.querySelector(".iconclose")
        const btnOpen = document.querySelector(".iconOpen")

        // fechando o painel relogio
        fundo.classList.add("escondeTempo");

        // ocultando btn de fechar div
        btnClose.classList.add("escondeIcon")

        //mostrando o botão de abrir div
        btnOpen.classList.remove("escondeIcon")
}

function abrir(){
        var fundo = document.querySelector(".fundo")
        var btnClose = document.querySelector(".iconclose")
        const btnOpen = document.querySelector(".iconOpen")

        // fechando o painel relogio
        fundo.classList.remove("escondeTempo");

        // ocultando btn de fechar div
        btnClose.classList.remove("escondeIcon")

        //mostrando o botão de abrir div
        btnOpen.classList.add("escondeIcon")
}

