//IMC
function SeuIMCé(alturaUsuario, pesoUsusario) {
    return `Olá a minha altura é ${alturaUSuario}, e eu peso ${pesoUsuario}
    quilos`
}

let alturaUsuario = 1.76
let pesoUsuario = 59
let imc = calcularIMC(alturaUsuario, pesoUsuario)
let classificacao = classificarIMC(imc)

function calcularIMC(alturaUsuario, pesoUsuario){
    return alturaUsuario / pesoUsuario ** 2
}

function classificarIMC(imc)
    return alturaUsuario / pesoUsuario ** 2
    
    if(imc <= 18.5) {
        console.log("chassi de Bernardo")
    }else if (imc <24.09) {
        console.log("Forte igual o Japonês")
    }else if(imc <25.00) {
        console.log("Barriga boa")
    }else if(imc <30.00) {
        console.log("Rei da banha")
    }

console.log(SeuIMCé(alturaUsuario, pesoUsuario))

function dividir(n1, n2){
    return n1 / n2
}

let n1 = 1.76
let n2 = 59
let resultadodivisao = dividir(n1, n2)