/*
Operador Rest é usado para agrupar o restante dos elementos de um array ou argumentos de uma função em uma única variável. 
Ele é o inverso do operador spread

*/

//Exemplo para receber um único parametro
function juntar(numero) {
    console.log(numero)
}

juntar(5, 6, 7, 8, 9, 10, 11, 12)

//Exemplo com uso do operador rest - uso do sinal de reticências. Caso retire o sinal de reticências ele irá entender como unico parametro. 
function add(...num) {
    console.log(num)
}
add(5, 6, 7, 8, 9, 10, 11, 12)

//Exemplo com uso de strings
function addNome(...nome) {
    //console.log(nome)
}

addNome('Flavio', 'Jose', 'Paulo', 'Maria', 'Sofia')

//Uso dos operadores spread e rest
function adicionar(nomes, ...novosNomes){ //uso do rest em: ...novosNomes
        let novoConjunto = [
            ...nomes, //spread
            ...novosNomes //spread
        ]
        return novoConjunto
}

let nomes = ['Flavio', 'Pedro']
let outros = adicionar(nomes, 'Leo', 'Campos', 'Souza', 'Cau')

console.log(outros)