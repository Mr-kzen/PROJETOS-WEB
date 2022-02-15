/**Funções especiais: 
 * MC e MR tem que ficar com as cores cinzas até que a função especial for ativada
 * Os botão terão o click lidos e cada click será mostrado na tela
 * O teclado só pode armazenar um numero novo após o caracter especial for escolhido
 * Lembrando que o numero muda se o caracter especial não for escolhido ou ele não for apagado
 * A tela tem a finalidade de mostrar o que o usuário está fazendo
*/

const valor = 0
const caracter = ['+', '-', '*', '/']

function calcular(click) {// imprime o que está sendo feito!

    const resultado = document.querySelector("#resultclick").innerHTML

    if (click == ".") {
        click = `,`
    }

    if (click == "*"){
        click = `x`
    }

    if (document.querySelector("#result").innerHTML.search('=') >= 0) {
        document.querySelector("#result").innerHTML = ""
        document.querySelector("#resultclick").innerHTML = ""
    }

    if(click == "xQd"){
        document.querySelector("#result").innerHTML += "sqr( "+ document.querySelector("#resultclick").innerHTML + " )="
        resultado = Number(resultado) * Number(resultado)
        document.querySelector("#resultclick").innerHTML = resultado.toFixed(15)
    } 
    else if(click == "pct"){
        document.querySelector("#resultclick").innerHTML = document.querySelector("#resultclick").innerHTML / 100
    } 
    else if(click == "1/x"){
        document.querySelector("#result").innerHTML += "1/( "+ document.querySelector("#resultclick").innerHTML + " )="
        document.querySelector("#resultclick").innerHTML = 1 / Number(resultado)
    }
    else if (click == "raiz2") {

        document.querySelector("#result").innerHTML += "raiz( "+ document.querySelector("#resultclick").innerHTML + " )="
        document.querySelector("#resultclick").innerHTML = Math.sqrt(Number(resultado))
    }else if (click == "+" || click == "-" || click == "x" || click == "/") {
        document.querySelector("#result").innerHTML += document.querySelector("#resultclick").innerHTML + click
        document.querySelector("#resultclick").innerHTML = ""
    }else if (click) {
        document.querySelector("#resultclick").innerHTML += click
    }
}

function result() {//retorna o resultado final

    var resultado = document.querySelector("#result").innerHTML

    resultado.replace(",", ".");
    resultado.replace("x", "*")

    if (resultado) {

        console.log(resultado.search("raiz") > 0 || resultado.search("1/") > 0)
        if (resultado.search("r") >= 0) {

        } else {
            document.querySelector("#result").innerHTML += document.querySelector("#resultclick").innerHTML

            document.querySelector("#resultclick").innerHTML = eval(resultado)
            document.querySelector("#result").innerHTML += '='
        }

        // historico

        //-- Criando os elementos que serão inseridos

        const container = document.querySelector(".historico")

        const novaDiv = document.createElement("div")

        const p1 = document.createElement("p")
        p1.appendChild(document.createTextNode(resultado))
        novaDiv.appendChild(p1)

        const p2 = document.createElement("p")
        p2.appendChild(document.createTextNode(document.querySelector("#resultclick").innerHTML))        
        novaDiv.appendChild(p2)

        container.appendChild(novaDiv)

        document.querySelector("#historicos").classList.add('sr-only')
        novaDiv.classList.add('historicos')
    }
    else {
        document.querySelector("#resultclick").innerHTML = ""
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