const visor = document.querySelector(".visor span")

const btn_ponto = document.getElementById("botao-ponto")

const number_0 = document.getElementById("botao-0")
const number_1 = document.getElementById("botao-1")
const number_2 = document.getElementById("botao-2")
const number_3 = document.getElementById("botao-3")
const number_4 = document.getElementById("botao-4")
const number_5 = document.getElementById("botao-5")
const number_6 = document.getElementById("botao-6")
const number_7 = document.getElementById("botao-7")
const number_8 = document.getElementById("botao-8")
const number_9 = document.getElementById("botao-9")

const soma = document.getElementById("soma")
const subtracao = document.getElementById("subtracao")
const multiplicacao = document.getElementById("multiplicacao")
const divisao = document.getElementById("divisao")



btn_ponto.addEventListener("click", function () {

    const lastCharacter = Number(visor.innerText.slice(-1))

    if (visor.innerHTML != "0000000000" && !isNaN(lastCharacter)) {
        visor.innerText += "."
    }

})

number_0.addEventListener("click", function () {
    
    const lastCharacter = Number(visor.innerText.slice(-1))

    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "0"
    } else if (lastCharacter != "0") {
        visor.innerText += "0"
    }
    
})

number_1.addEventListener("click", function () {
    
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "1"
    } else {
        visor.innerText += "1"
    }
    
})

number_2.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "2"
    } else {
        visor.innerText += "2"
    }
    
})

number_3.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "3"
    } else {
        visor.innerText += "3"
    }
    
})

number_4.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "4"
    } else {
        visor.innerText += "4"
    }
    
})

number_5.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "5"
    } else {
        visor.innerText += "5"
    }
    
})

number_6.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "6"
    } else {
        visor.innerText += "6"
    }
    
})

number_7.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "7"
    } else {
        visor.innerText += "7"
    }
    
})

number_8.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "8"
    } else {
        visor.innerText += "8"
    }
    
})

number_9.addEventListener("click", function () {
        
    if (visor.innerHTML == "0000000000") {
        visor.innerText = ""
        visor.innerText += "9"
    } else {
        visor.innerText += "9"
    }
    
})



soma.addEventListener("click", function () {

    const lastCharacter = Number(visor.innerText.slice(-1))
    
    if (!isNaN(lastCharacter) && visor.innerHTML != "0000000000") {
        visor.innerText += "+"
    }

})

subtracao.addEventListener("click", function () {
    
    const lastCharacter = Number(visor.innerText.slice(-1))
    
    if (!isNaN(lastCharacter) && visor.innerHTML != "0000000000") {
        visor.innerText += "-"
    }

})

multiplicacao.addEventListener("click", function () {
    
    const lastCharacter = Number(visor.innerText.slice(-1))
    
    if (!isNaN(lastCharacter) && visor.innerHTML != "0000000000") {
        visor.innerText += "×"
    }

})

divisao.addEventListener("click", function () {
    
    const lastCharacter = Number(visor.innerText.slice(-1))
    
    if (!isNaN(lastCharacter) && visor.innerHTML != "0000000000") {
        visor.innerText += "÷"
    }

})



// Botão -> delete
function apagarCaractere() {

    const lastCharacter = visor.innerText.slice(-1)
    
    if (visor.innerText == "") {
        visor.innerText = "0000000000"
    } else if (visor.innerText != "0000000000") {
        visor.innerText = visor.innerText.replace(lastCharacter, "")
    }

    /* 
        Alternativas: 
        ->> visor.innerText = visor.innerText - visor.innerText.slice(-1)
        ->> splice(-1, 1)
    */
}

// Botão -> CE
function apagarTudo() { 
    visor.innerText = "0000000000"
}

// Botão -> =
function calcular() {

    const expressao = 
    visor.innerText
    .replace(/×/g, "*")
    .replace(/÷/g, "/")

    visor.innerText = eval(expressao)

}

// PENDENTE:

/*
    ->> corrigir comportamento que faz o apagarCaractere() dar preferência aos números quando existe pontos (.) na expressão
    ->> tratar erro que impede o calculo ao sobrar um operador matemático no final
    ->> não deixar visor vazio ao apagar todos os caracteres
    ->> deixar a calculadora transbordar para fora da tela quando diminuída a resolução
    ->> resetar o visor ao inserir um número logo após o resultado de uma expressão
    ->> corrigir transbordamento de números para fora do visor
    ->> corrigir cálculo estranho ao subtrair números inteiros de números decimais (Ex.: 3.2 - 3 = 0.20000000000000018)
*/