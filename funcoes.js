// Funções

function dizerOla() {
    console.log("Olá");    
}

dizerOla()

//Funções com parâmetro e com retorno

function somar(num1, num2) {
let soma = num1 + num2
    console.log(num1+num2)  
    return soma  
}

somar(25, 1000)

//função de callback

function subtrair (num1, num2, funcao) {
    num1 - num2
    funcao()    
}

subtrair(2, 10, dizerOla)

//função de seta (array fuction)

const ContarAlunos = (array) => {
    return array.length
}

console.log(ContarAlunos(["Zenith", "Matheus", "Jacqueline"]))

// const ContarAlunos = (array) => console.log(array.length),console.log("oi")   > minimar com apenas 1 linha de codigo mas o return obriga a usar a chave


//arrow fuction com callback