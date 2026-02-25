
//Arrays - listas

let alunos = ["Mateus", "Samuel", "Mario"]

console.log(alunos)

alunos[3] = "Zenith"

console.log(alunos)

alunos[1] = "Nayara"

console.log(alunos)


let produtos = [
    {
        id: 1,
        nome:"Tênis",
        categoria: ["Casual", "Masculino"],
        marca:"Nike",
        tamanho:[40, 41, 42],
        cor:["Preto", "Branco", "Bege"],
        preco: 399.90
    },
    {
        id: 2,
        nome:"Tênis",
        categoria: ["Casual", "Masculino"],
        marca:"Adidas",
        tamanho:[40, 41, 42],
        cor:["Preto", "Branco", "Bege"],
        preco: 499.90
    },
    {
        id: 3,
        nome:"Tênis",
        categoria: ["Casual", "Masculino"],
        marca:"New Balance",
        tamanho:[40, 41, 42],
        cor:["Preto", "Branco", "Bege"],
        preco: 799.90
    },
    {
        id: 4,
        nome:"Tênis",
        categoria: ["Casual", "Masculino"],
        marca:"All Star",
        tamanho:[40, 41, 42],
        cor:["Preto", "Branco", "Bege"],
        preco: 299.90
    }
]

let numerosPares = [2, 4, 6, 8, 10]

//insere item no final do array

numerosPares.push(12)

console.log(numerosPares)