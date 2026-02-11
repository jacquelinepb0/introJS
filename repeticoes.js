// Padrões de repetição

//for > sabemos a qntd de vezes a ser repetido

//for (inicializador, condição, incrementador){
// bloco de código a ser repetidos
//}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

let cursos = [
  "Desenvolvidor fullstack",
  "mkt digital",
  " design ux",
  "curso fullcycle",
];

for (let index = 0; index < cursos.length; index++) {
  const element = cursos[index];
}

let alunos = ["Zenith", "Angelo", "Felipe", "Mário", "Yasmin"]

//decremento i--

for (let i = 4; i => 0; i--) {
    const element = alunos[i];    
}

let i = 4

for (;i >= 0; ) {
  const element = alunos[i];
  i--;
}

//while usado quando nao sabemos a quantidade de repetoções

let i = 0
while (i < array.length) {
    i++
}