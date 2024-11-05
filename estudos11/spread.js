/*
Operador Spread - Serve para aproveitar valores de um array em um novo array.
Utilizado para espalhar elementos de um array, objeto ou iterável em outro lugar, como em uma nova lista ou objeto.
*/
//ARRAY
let array = [1, 2, 3, 4, 5]
let outro = [...array, 6, 7, 8, 9, 10]
console.log(outro) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//OBJETO
let pessoa = {
    nome: 'Flavio',
    sobrenome: 'Silva',
    idade: 43
}

let Dapessoa ={
    ...pessoa,
    cidade: 'Salvador',
    estado: 'Bahia',
    bairro: 'Amaralina'
}
console.log(Dapessoa)

//FUNÇÃO

function adicionarInfo(info){
    let novaInfo = {
        ...info,
        local: 'casa',
        trabalho: 'concursado',
        token: 'tehsieofneo'
    }
    return novaInfo
    
}

adicionarInfo({primeiro: 'Flavio', segundo:'Silva'}) //execução da função, passando um objeto por exemplo
console.log(adicionarInfo({primeiro: 'Flavio', segundo:'Silva'}))