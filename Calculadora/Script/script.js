/**Funções especiais: 
 * MC e MR tem que ficar com as cores cinzas até que a função especial for ativada
 * Os botão terão o click lidos e cada click será mostrado na tela
 * O teclado só pode armazenar um numero novo após o caracter especial for escolhido
 * Lembrando que o numero muda se o caracter especial não for escolhido ou ele não for apagado
 * A tela tem a finalidade de mostrar o que o usuário está fazendo
*/

function calcular(num){// armazena os valores
    var numero = document.querySelector("#result").innerHTML

    document.querySelector("#result").innerHTML = numero + num

}

function result(){//retorna o resultado final
    var resultado = document.querySelector("#result").innerHTML

    if(resultado){
        document.querySelector("#result").innerHTML = eval(resultado);
    }else{
        document.querySelector("#result").innerHTML = ""
    }
}

function clean(){
    document.querySelector("#result").innerHTML = "";
}

function back(apagar){

    //CE - Apaga tudo após o caracter de soma
    //Delete - Apaga 1 por 1

    limpar = document.querySelector("#result").innerHTML

    if(apagar == "delete"){
        document.querySelector("#result").innerHTML = limpar.substring(0, limpar.length -1)
    }else{
        limpar.search
    }
    
}


/**O historico ficará com a função de mostrar os resultados junto com a soma após o botão igual ser presionado */