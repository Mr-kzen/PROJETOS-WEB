/**Funções especiais: 
 * MC e MR tem que ficar com as cores cinzas até que a função especial for ativada
 * Os botão terão o click lidos e cada click será mostrado na tela
 * O teclado só pode armazenar um numero novo após o caracter especial for escolhido
 * Lembrando que o numero muda se o caracter especial não for escolhido ou ele não for apagado
 * A tela tem a finalidade de mostrar o que o usuário está fazendo
*/
function funcoes(click){//funções especiais utilizados para realizar a soma ou a subtração
    const resultado = document.querySelector("#result").innerHTML
    
    if(resultado.search("=") >= 0){
        document.querySelector("#result").innerHTML = document.querySelector("#resultclick").innerHTML + click
    }else{
        document.querySelector("#result").innerHTML += document.querySelector("#resultclick").innerHTML + click
    }

    document.querySelector("#resultclick").innerHTML = ""

}

function calcular(click) {// imprime o que está sendo feito!

    if (click == ".") {
        click = `,`
    }

    if (click == "*"){
        click = `x`
    }

    if (document.querySelector("#result").innerHTML.search('=') >= 0) {
            clean('c')
    
            document.querySelector("#resultclick").innerHTML += click
    }

    if (click) {
        document.querySelector("#resultclick").innerHTML += click
    }
}

function igual() {//retorna o resultado final
    document.querySelector("#result").innerHTML += document.querySelector("#resultclick").innerHTML

    resultado = document.querySelector("#result").innerHTML
    
    resultado.replace(",", ".");
    resultado.replace("x", "*")

    if (resultado) {
        if (resultado.search("r") >= 0 || resultado.search("/") >= 0){

        }else {            
            document.querySelector("#resultclick").innerHTML = eval(resultado)
            document.querySelector("#result").innerHTML += "="
        }
        // historico
        return historico()
    }
    else {
        document.querySelector("#resultclick").innerHTML = ""
    }
}

function especiais(click){

    resultado = document.querySelector("#resultclick").innerHTML

    if(click == "xQd"){
        document.querySelector("#result").innerHTML += "sqr( "+ document.querySelector("#resultclick").innerHTML + " )="
        resultado = Number(resultado) * Number(resultado)
        document.querySelector("#resultclick").innerHTML = resultado
    }
    
    if(click == "pct"){

        if(document.querySelector("#result").innerHTML != "" ){
            console.log("yes")
            document.querySelector("#resultclick").innerHTML = parseFloat(document.querySelector("#resultclick").innerHTML / 100)
            document.querySelector("#result").innerHTML += document.querySelector("#resultclick").innerHTML
        
        }
    } 
    
    if(click == "1/x"){

        const somar = parseFloat(document.querySelector("#resultclick").innerHTML);

        document.querySelector("#result").innerHTML += "1/( "+ document.querySelector("#resultclick").innerHTML + " )="

        if((1 / somar) == "NaN"){

            document.querySelector("#resultclick").innerHTML = "1"
        
        }else{

            document.querySelector("#resultclick").innerHTML = (1 / somar).toFixed(15)
        
        }

    }
    
    if (click == "raiz2") {

        document.querySelector("#result").innerHTML += "raiz( "+ document.querySelector("#resultclick").innerHTML + " )="
        document.querySelector("#resultclick").innerHTML = Math.sqrt(Number(document.querySelector("#resultclick").innerHTML))
    
    }
}




function clean(botao) {

    limpar = document.querySelector("#resultclick").innerHTML

    if (botao == 'c') {
        document.querySelector("#resultclick").innerHTML = ""
        document.querySelector("#result").innerHTML = ""
    }
    else if (botao == "delete") {
        document.querySelector("#resultclick").innerHTML = limpar.substring(0, limpar.length - 1)
    }
    else if (botao == "ce") {
        document.querySelector("#resultclick").innerHTML = ""
    }
}

function historico(){

    //-- Criando os elementos que serão inseridos

    const container = document.querySelector(".historico")
    const novaDiv = document.createElement("div")

    const p1 = document.createElement("p")
    p1.appendChild(document.createTextNode(document.querySelector("#result").innerHTML))
    novaDiv.appendChild(p1)

    const p2 = document.createElement("p")
    p2.appendChild(document.createTextNode(document.querySelector("#resultclick").innerHTML))        
    novaDiv.appendChild(p2)

    container.appendChild(novaDiv)

    document.querySelector("#historicos").classList.add('sr-only')
    novaDiv.classList.add('historicos')
}