/*
Keys - retorna um iterador que contém as chaves (ou índices) de um objeto iterável, como arrays ou objetos.
*/

let lista = ['ovos', 'café', 'uva', 'pipoca']


//console.log(lista.keys())
console.log(Object.keys(lista)) //retorna os indices
console.log(Object.values(lista)) //retorna os valores
console.log(Object.entries(lista))// retorna o indice e o valor dentro de um array


const grade = [10, 13, 15, 8]
grade.forEach(function(grade){
    console.log(`Rodou em ${grade} retornando ${grade * 2} que é o dobro`)
})

//Treinando com objetos

let pessoa = {
    nome:'flavio',
    sobrenome: 'leite',
    idade: 43
}
console.log(Object.keys(pessoa)) //retorna as chaves ou propriedades do objeto
console.log(Object.values(pessoa))// retorna os valores do objeto
console.log(Object.entries(pessoa))//retorna o array com chave e valor, dentro de um array